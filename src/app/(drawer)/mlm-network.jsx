import React, { useMemo, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Search,
  Users,
  Filter,
} from 'lucide-react-native';

import { useRouter } from 'expo-router';

import {
  DIRECT_MEMBERS,
  MLM_MEMBERS,
} from '../../data/mockData';

import {
  Header,
  MemberCard,
  COLORS,
} from '../../components/mlm/MlmComponents';

/* =========================================================
   BRAND COLORS
========================================================= */

const PRIMARY = '#0345BD';
const GOLD = '#FCE159';

const DARK_BLUE = '#06275F';
const TEXT = '#102A56';
const MUTED = '#64748B';

const BACKGROUND = '#F6F8FC';
const WHITE = '#FFFFFF';

const BORDER = '#E1E8F2';

const LIGHT_BLUE = 'rgba(3, 69, 189, 0.07)';
const LIGHT_GOLD = 'rgba(252, 225, 89, 0.18)';

/* =========================================================
   SCREEN
========================================================= */

export default function MLMNetwork() {
  const router = useRouter();

  const [level, setLevel] = useState('Direct');

  const [search, setSearch] = useState('');

  const tabs = [
    'Direct',
    'Level 2',
    'Level 3',
    'Level 4',
    'Level 5',
  ];

  /* =======================================================
     FILTER LOGIC
     ORIGINAL LOGIC PRESERVED
  ======================================================= */

  const filteredMembers = useMemo(() => {
    let list;

    if (level === 'Direct') {
      list = DIRECT_MEMBERS;
    } else {
      const selectedLevel = Number(
        level.replace('Level ', ''),
      );

      list = MLM_MEMBERS.filter(
        (member) =>
          member.level === selectedLevel,
      );
    }

    if (!search.trim()) {
      return list;
    }

    return list.filter((member) =>
      member.name
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [level, search]);

  /* =======================================================
     UI
  ======================================================= */

  return (
    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.headerWrapper}>
        <Header
          title="Referral Network"
          subtitle="Manage your network"
          onBack={() => router.back()}
        />
      </View>

      {/* LEVEL TABS */}

      <View style={styles.tabsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabs}
        >
          {tabs.map((item) => (
            <TouchableOpacity
              key={item}
              activeOpacity={0.8}
              onPress={() => setLevel(item)}
              style={[
                styles.tab,
                level === item && styles.activeTab,
              ]}
            >
              <Text
                numberOfLines={1}
                style={[
                  styles.tabText,
                  level === item &&
                    styles.activeTabText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* SEARCH */}

      <View style={styles.searchBox}>

        <View style={styles.searchIconBox}>
          <Search
            size={18}
            color={PRIMARY}
            strokeWidth={2.4}
          />
        </View>

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search members..."
          placeholderTextColor="#94A3B8"
          style={styles.searchInput}
        />

        <View style={styles.filterIconBox}>
          <Filter
            size={18}
            color={MUTED}
            strokeWidth={2.2}
          />
        </View>

      </View>

      {/* SUMMARY */}

      <View style={styles.summary}>

        <View>
          <Text style={styles.summaryLabel}>
            CURRENT NETWORK
          </Text>

          <Text style={styles.summaryValue}>
            {filteredMembers.length} Members
          </Text>
        </View>

        <View style={styles.levelBadge}>

          <Users
            size={15}
            color={PRIMARY}
            strokeWidth={2.5}
          />

          <Text style={styles.levelBadgeText}>
            {level}
          </Text>

        </View>

      </View>

      {/* MEMBER LIST */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >

        {filteredMembers.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onPress={() =>
              router.push('/mlm-member')
            }
          />
        ))}

        {/* EMPTY STATE */}

        {filteredMembers.length === 0 && (
          <View style={styles.empty}>

            <View style={styles.emptyIcon}>
              <Users
                size={34}
                color={PRIMARY}
                strokeWidth={1.8}
              />
            </View>

            <Text style={styles.emptyTitle}>
              No members found
            </Text>

            <Text style={styles.emptyDescription}>
              Try another name or select a
              different referral level.
            </Text>

          </View>
        )}

      </ScrollView>

    </View>
  );
}

/* =========================================================
   STYLES
========================================================= */

const styles = StyleSheet.create({

  /* =======================================================
     CONTAINER
  ======================================================= */

  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },

  /* =======================================================
     HEADER
  ======================================================= */

  headerWrapper: {
    paddingTop: 8,
  },

  /* =======================================================
     TABS
  ======================================================= */

  tabsWrapper: {
    marginTop: 8,
  },

  tabs: {
    paddingHorizontal: 16,
    paddingVertical: 8,

    flexDirection: 'row',

    alignItems: 'center',

    gap: 7,
  },

  /*
    SMALL HORIZONTAL BUTTON
  */

  tab: {
    minWidth: 58,

    height: 34,

    paddingHorizontal: 11,

    borderRadius: 9,

    backgroundColor: WHITE,

    borderWidth: 1,

    borderColor: BORDER,

    alignItems: 'center',

    justifyContent: 'center',

    flexDirection: 'row',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.03,

    shadowRadius: 3,

    elevation: 1,
  },

  activeTab: {
    backgroundColor: PRIMARY,

    borderColor: PRIMARY,

    shadowColor: PRIMARY,

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.16,

    shadowRadius: 5,

    elevation: 2,
  },

  tabText: {
    fontSize: 10.5,

    lineHeight: 14,

    color: MUTED,

    fontWeight: '700',

    textAlign: 'center',

    includeFontPadding: false,
  },

  activeTabText: {
    color: WHITE,

    fontWeight: '800',
  },

  /* =======================================================
     SEARCH
  ======================================================= */

  searchBox: {
    marginHorizontal: 16,

    marginTop: 5,

    height: 48,

    backgroundColor: WHITE,

    borderWidth: 1,

    borderColor: BORDER,

    borderRadius: 13,

    paddingLeft: 9,

    paddingRight: 10,

    flexDirection: 'row',

    alignItems: 'center',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.04,

    shadowRadius: 5,

    elevation: 1,
  },

  searchIconBox: {
    width: 32,

    height: 32,

    borderRadius: 9,

    backgroundColor: LIGHT_BLUE,

    alignItems: 'center',

    justifyContent: 'center',
  },

  searchInput: {
    flex: 1,

    height: 46,

    marginLeft: 9,

    color: TEXT,

    fontSize: 13,

    fontWeight: '500',

    paddingVertical: 0,
  },

  filterIconBox: {
    width: 32,

    height: 32,

    borderRadius: 9,

    backgroundColor: '#F7F9FC',

    alignItems: 'center',

    justifyContent: 'center',
  },

  /* =======================================================
     SUMMARY
  ======================================================= */

  summary: {
    marginHorizontal: 16,

    marginTop: 15,

    marginBottom: 5,

    paddingHorizontal: 14,

    paddingVertical: 12,

    backgroundColor: WHITE,

    borderRadius: 13,

    borderWidth: 1,

    borderColor: BORDER,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.035,

    shadowRadius: 5,

    elevation: 1,
  },

  summaryLabel: {
    fontSize: 8.5,

    color: MUTED,

    fontWeight: '800',

    letterSpacing: 0.8,
  },

  summaryValue: {
    fontSize: 15,

    fontWeight: '800',

    color: DARK_BLUE,

    marginTop: 3,
  },

  /* =======================================================
     LEVEL BADGE
  ======================================================= */

  levelBadge: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    gap: 5,

    paddingHorizontal: 10,

    height: 30,

    backgroundColor: LIGHT_GOLD,

    borderWidth: 1,

    borderColor: 'rgba(252,225,89,0.45)',

    borderRadius: 8,
  },

  levelBadgeText: {
    fontSize: 10.5,

    fontWeight: '800',

    color: DARK_BLUE,
  },

  /* =======================================================
     MEMBER LIST
  ======================================================= */

  list: {
    paddingHorizontal: 16,

    paddingTop: 7,

    paddingBottom: 40,
  },

  /* =======================================================
     EMPTY STATE
  ======================================================= */

  empty: {
    alignItems: 'center',

    justifyContent: 'center',

    paddingTop: 65,

    paddingHorizontal: 30,
  },

  emptyIcon: {
    width: 70,

    height: 70,

    borderRadius: 35,

    backgroundColor: LIGHT_BLUE,

    borderWidth: 1,

    borderColor: 'rgba(3,69,189,0.12)',

    alignItems: 'center',

    justifyContent: 'center',

    marginBottom: 14,
  },

  emptyTitle: {
    fontSize: 15,

    fontWeight: '800',

    color: DARK_BLUE,
  },

  emptyDescription: {
    marginTop: 6,

    fontSize: 11.5,

    lineHeight: 18,

    color: MUTED,

    textAlign: 'center',

    maxWidth: 260,
  },

});