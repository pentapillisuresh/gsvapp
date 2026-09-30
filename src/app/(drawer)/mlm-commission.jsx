import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  Percent,
  Info,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react-native';

import { useRouter } from 'expo-router';

import {
  MLM_COMMISSION_LEVELS,
} from '../../data/mockData';

import {
  Header,
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

const LIGHT_BLUE = 'rgba(3,69,189,0.07)';
const LIGHT_GOLD = 'rgba(252,225,89,0.18)';

/* =========================================================
   SCREEN
========================================================= */

export default function MLMCommission() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.headerWrapper}>
        <Header
          title="Commission Structure"
          subtitle="5-level referral commission"
          onBack={() => router.back()}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* =================================================
            HERO
        ================================================= */}

        <View style={styles.hero}>

          <View style={styles.heroTopLine} />

          <View style={styles.iconOuter}>

            <View style={styles.icon}>
              <Percent
                size={28}
                color={PRIMARY}
                strokeWidth={2.3}
              />
            </View>

          </View>

          <Text style={styles.heroTitle}>
            5 Level Commission
          </Text>

          <Text style={styles.heroDescription}>
            Commission is calculated according to
            the member's level in your referral network.
          </Text>

          <View style={styles.heroBadge}>

            <ShieldCheck
              size={14}
              color={DARK_BLUE}
              strokeWidth={2.4}
            />

            <Text style={styles.heroBadgeText}>
              Up to 5 Referral Levels
            </Text>

          </View>

        </View>

        {/* =================================================
            QUICK OVERVIEW
        ================================================= */}

        <View style={styles.overviewRow}>

          <View style={styles.overviewCard}>

            <View style={styles.overviewIcon}>
              <TrendingUp
                size={18}
                color={PRIMARY}
                strokeWidth={2.3}
              />
            </View>

            <Text style={styles.overviewValue}>
              5
            </Text>

            <Text style={styles.overviewLabel}>
              Active Levels
            </Text>

          </View>

          <View style={styles.overviewCard}>

            <View style={styles.overviewIconGold}>
              <Percent
                size={18}
                color={DARK_BLUE}
                strokeWidth={2.3}
              />
            </View>

            <Text style={styles.overviewValue}>
              5%
            </Text>

            <Text style={styles.overviewLabel}>
              Level 1
            </Text>

          </View>

          <View style={styles.overviewCard}>

            <View style={styles.overviewIcon}>
              <UsersIcon />
            </View>

            <Text style={styles.overviewValue}>
              0%
            </Text>

            <Text style={styles.overviewLabel}>
              Beyond L5
            </Text>

          </View>

        </View>

        {/* =================================================
            COMMISSION TABLE
        ================================================= */}

        <View style={styles.table}>

          {/* TABLE TITLE */}

          <View style={styles.tableTitleArea}>

            <View>

              <Text style={styles.tableTitle}>
                Commission Levels
              </Text>

              <Text style={styles.tableSubtitle}>
                Example based on ₹1,00,000 investment
              </Text>

            </View>

            <View style={styles.tableTitleIcon}>
              <Percent
                size={18}
                color={PRIMARY}
                strokeWidth={2.4}
              />
            </View>

          </View>

          {/* TABLE HEADER */}

          <View style={styles.tableHeader}>

            <Text
              style={[
                styles.headerCell,
                styles.levelHeader,
              ]}
            >
              LEVEL
            </Text>

            <Text
              style={[
                styles.headerCell,
                styles.percentHeader,
              ]}
            >
              COMMISSION
            </Text>

            <Text
              style={[
                styles.headerCell,
                styles.amountHeader,
              ]}
            >
              ₹1 LAKH
            </Text>

          </View>

          {/* LEVEL ROWS */}

          {MLM_COMMISSION_LEVELS.map((item) => (

            <View
              key={item.level}
              style={styles.tableRow}
            >

              {/* LEVEL */}

              <View style={styles.levelContainer}>

                <View
                  style={[
                    styles.levelDot,
                    {
                      backgroundColor:
                        getLevelColor(item.level),
                    },
                  ]}
                />

                <Text style={styles.levelCell}>
                  Level {item.level}
                </Text>

              </View>

              {/* PERCENTAGE */}

              <View style={styles.percentContainer}>

                <Text style={styles.percentCell}>
                  {item.percentage}%
                </Text>

              </View>

              {/* AMOUNT */}

              <Text style={styles.amountCell}>
                ₹
                {(
                  100000 *
                  item.percentage /
                  100
                ).toLocaleString('en-IN')}
              </Text>

            </View>

          ))}

          {/* BEYOND LEVEL 5 */}

          <View
            style={[
              styles.tableRow,
              styles.lastRow,
            ]}
          >

            <View style={styles.levelContainer}>

              <View style={styles.zeroDot} />

              <Text style={styles.levelCell}>
                Beyond Level 5
              </Text>

            </View>

            <View style={styles.percentContainer}>

              <Text style={styles.zero}>
                0%
              </Text>

            </View>

            <Text style={styles.amountCell}>
              ₹0
            </Text>

          </View>

        </View>

        {/* =================================================
            EXAMPLE
        ================================================= */}

        <View style={styles.example}>

          <View style={styles.exampleHeader}>

            <View style={styles.exampleIcon}>
              <Info
                size={18}
                color={PRIMARY}
                strokeWidth={2.3}
              />
            </View>

            <View>
              <Text style={styles.exampleTitle}>
                How the commission works
              </Text>

              <Text style={styles.exampleSubtitle}>
                Simple referral example
              </Text>
            </View>

          </View>

          {/* STEP 1 */}

          <View style={styles.exampleStep}>

            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>
                1
              </Text>
            </View>

            <Text style={styles.exampleText}>
              If a Level 1 member invests
              ₹1,00,000, the Level 1 commission
              at 5% is ₹5,000.
            </Text>

          </View>

          {/* STEP 2 */}

          <View style={styles.exampleStep}>

            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>
                2
              </Text>
            </View>

            <Text style={styles.exampleText}>
              If that member's Level 2 referral
              invests ₹1,00,000, the Level 2
              commission at 4% is ₹4,000.
            </Text>

          </View>

          {/* STEP 3 */}

          <View style={styles.exampleStep}>

            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>
                3
              </Text>
            </View>

            <Text style={styles.exampleText}>
              The same cascading calculation
              continues through Level 5.
            </Text>

          </View>

        </View>

        {/* =================================================
            REFERRAL FLOW
        ================================================= */}

        <View style={styles.flowCard}>

          <Text style={styles.flowTitle}>
            Referral Flow
          </Text>

          <Text style={styles.flowSubtitle}>
            Commission follows your network level
          </Text>

          <View style={styles.flowRow}>

            <FlowItem
              level="L1"
              percentage="5%"
            />

            <View style={styles.flowLine} />

            <FlowItem
              level="L2"
              percentage="4%"
            />

            <View style={styles.flowLine} />

            <FlowItem
              level="L3"
              percentage="3%"
            />

            <View style={styles.flowLine} />

            <FlowItem
              level="L4"
              percentage="2%"
            />

            <View style={styles.flowLine} />

            <FlowItem
              level="L5"
              percentage="1%"
            />

          </View>

        </View>

        {/* BRAND FOOTER */}

        <View style={styles.footer}>

          <View style={styles.footerLine} />

          <Text style={styles.footerText}>
            GLOBAL SYNERGY VENTURES
          </Text>

          <View style={styles.footerLine} />

        </View>

      </ScrollView>

    </View>
  );
}

/* =========================================================
   USERS ICON
========================================================= */

function UsersIcon() {
  return (
    <View style={styles.simpleUsersIcon}>
      <View style={styles.userHead} />
      <View style={styles.userBody} />
    </View>
  );
}

/* =========================================================
   FLOW ITEM
========================================================= */

function FlowItem({
  level,
  percentage,
}) {
  return (
    <View style={styles.flowItem}>

      <View style={styles.flowCircle}>
        <Text style={styles.flowLevel}>
          {level}
        </Text>
      </View>

      <Text style={styles.flowPercent}>
        {percentage}
      </Text>

    </View>
  );
}

/* =========================================================
   LEVEL COLORS
========================================================= */

function getLevelColor(level) {
  const colors = [
    PRIMARY,
    '#2459C7',
    '#4775D1',
    '#6A91DD',
    GOLD,
  ];

  return colors[level - 1] || PRIMARY;
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

  headerWrapper: {
    paddingTop: 8,
  },

  /* =======================================================
     CONTENT
  ======================================================= */

  content: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 45,
  },

  /* =======================================================
     HERO
  ======================================================= */

  hero: {
    backgroundColor: WHITE,

    borderRadius: 18,

    borderWidth: 1,

    borderColor: BORDER,

    paddingHorizontal: 20,

    paddingTop: 22,

    paddingBottom: 20,

    alignItems: 'center',

    overflow: 'hidden',

    shadowColor: '#0B1F3A',

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.06,

    shadowRadius: 10,

    elevation: 2,
  },

  heroTopLine: {
    position: 'absolute',

    top: 0,

    left: 0,

    right: 0,

    height: 4,

    backgroundColor: GOLD,
  },

  iconOuter: {
    width: 68,

    height: 68,

    borderRadius: 34,

    backgroundColor: LIGHT_BLUE,

    alignItems: 'center',

    justifyContent: 'center',

    borderWidth: 1,

    borderColor: 'rgba(3,69,189,0.10)',
  },

  icon: {
    width: 52,

    height: 52,

    borderRadius: 26,

    backgroundColor: WHITE,

    alignItems: 'center',

    justifyContent: 'center',

    borderWidth: 1,

    borderColor: 'rgba(252,225,89,0.65)',
  },

  heroTitle: {
    marginTop: 13,

    fontSize: 20,

    fontWeight: '900',

    color: DARK_BLUE,

    textAlign: 'center',
  },

  heroDescription: {
    textAlign: 'center',

    color: MUTED,

    fontSize: 11.5,

    lineHeight: 18,

    marginTop: 6,

    maxWidth: 300,
  },

  heroBadge: {
    marginTop: 13,

    flexDirection: 'row',

    alignItems: 'center',

    gap: 6,

    backgroundColor: LIGHT_GOLD,

    borderWidth: 1,

    borderColor: 'rgba(252,225,89,0.50)',

    borderRadius: 8,

    paddingHorizontal: 10,

    paddingVertical: 6,
  },

  heroBadgeText: {
    fontSize: 9.5,

    fontWeight: '800',

    color: DARK_BLUE,
  },

  /* =======================================================
     OVERVIEW
  ======================================================= */

  overviewRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 12,
  },

  overviewCard: {
    width: '31.5%',

    minHeight: 100,

    backgroundColor: WHITE,

    borderWidth: 1,

    borderColor: BORDER,

    borderRadius: 14,

    alignItems: 'center',

    justifyContent: 'center',

    paddingVertical: 10,
  },

  overviewIcon: {
    width: 30,

    height: 30,

    borderRadius: 9,

    backgroundColor: LIGHT_BLUE,

    alignItems: 'center',

    justifyContent: 'center',
  },

  overviewIconGold: {
    width: 30,

    height: 30,

    borderRadius: 9,

    backgroundColor: LIGHT_GOLD,

    alignItems: 'center',

    justifyContent: 'center',
  },

  overviewValue: {
    marginTop: 5,

    fontSize: 16,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  overviewLabel: {
    marginTop: 2,

    fontSize: 8.5,

    color: MUTED,

    fontWeight: '600',

    textAlign: 'center',
  },

  /* =======================================================
     SIMPLE USER ICON
  ======================================================= */

  simpleUsersIcon: {
    width: 18,

    height: 18,

    alignItems: 'center',

    justifyContent: 'flex-start',
  },

  userHead: {
    width: 6,

    height: 6,

    borderRadius: 3,

    backgroundColor: PRIMARY,

    marginTop: 1,
  },

  userBody: {
    width: 12,

    height: 6,

    borderTopLeftRadius: 6,

    borderTopRightRadius: 6,

    backgroundColor: PRIMARY,

    marginTop: 2,
  },

  /* =======================================================
     TABLE
  ======================================================= */

  table: {
    marginTop: 14,

    backgroundColor: WHITE,

    borderWidth: 1,

    borderColor: BORDER,

    borderRadius: 16,

    overflow: 'hidden',

    shadowColor: '#0B1F3A',

    shadowOffset: {
      width: 0,

      height: 3,
    },

    shadowOpacity: 0.04,

    shadowRadius: 8,

    elevation: 1,
  },

  tableTitleArea: {
    paddingHorizontal: 15,

    paddingVertical: 14,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    borderBottomWidth: 1,

    borderBottomColor: '#EEF2F7',
  },

  tableTitle: {
    fontSize: 15,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  tableSubtitle: {
    marginTop: 3,

    fontSize: 9.5,

    color: MUTED,
  },

  tableTitleIcon: {
    width: 34,

    height: 34,

    borderRadius: 9,

    backgroundColor: LIGHT_BLUE,

    alignItems: 'center',

    justifyContent: 'center',
  },

  /* =======================================================
     TABLE HEADER
  ======================================================= */

  tableHeader: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F7F9FC',

    paddingHorizontal: 14,

    height: 38,

    borderBottomWidth: 1,

    borderBottomColor: BORDER,
  },

  headerCell: {
    fontSize: 8.5,

    fontWeight: '900',

    color: MUTED,

    letterSpacing: 0.4,
  },

  levelHeader: {
    flex: 1.15,
  },

  percentHeader: {
    flex: 0.8,

    textAlign: 'center',
  },

  amountHeader: {
    flex: 1,

    textAlign: 'right',
  },

  /* =======================================================
     TABLE ROW
  ======================================================= */

  tableRow: {
    minHeight: 57,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 14,

    borderBottomWidth: 1,

    borderBottomColor: '#EEF2F6',
  },

  lastRow: {
    borderBottomWidth: 0,

    backgroundColor: '#FBFCFE',
  },

  levelContainer: {
    flex: 1.15,

    flexDirection: 'row',

    alignItems: 'center',
  },

  levelDot: {
    width: 8,

    height: 8,

    borderRadius: 4,

    marginRight: 8,
  },

  zeroDot: {
    width: 8,

    height: 8,

    borderRadius: 4,

    marginRight: 8,

    backgroundColor: '#CBD5E1',
  },

  levelCell: {
    fontSize: 11.5,

    fontWeight: '800',

    color: TEXT,
  },

  percentContainer: {
    flex: 0.8,

    alignItems: 'center',
  },

  percentCell: {
    fontSize: 13,

    fontWeight: '900',

    color: PRIMARY,
  },

  zero: {
    fontSize: 13,

    fontWeight: '900',

    color: MUTED,
  },

  amountCell: {
    flex: 1,

    textAlign: 'right',

    fontSize: 11.5,

    fontWeight: '800',

    color: TEXT,
  },

  /* =======================================================
     EXAMPLE
  ======================================================= */

  example: {
    marginTop: 14,

    backgroundColor: WHITE,

    borderRadius: 16,

    borderWidth: 1,

    borderColor: BORDER,

    padding: 16,

    shadowColor: '#0B1F3A',

    shadowOffset: {
      width: 0,

      height: 3,
    },

    shadowOpacity: 0.04,

    shadowRadius: 8,

    elevation: 1,
  },

  exampleHeader: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  exampleIcon: {
    width: 36,

    height: 36,

    borderRadius: 10,

    backgroundColor: LIGHT_GOLD,

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 10,
  },

  exampleTitle: {
    fontSize: 14,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  exampleSubtitle: {
    marginTop: 2,

    fontSize: 9.5,

    color: MUTED,
  },

  /* =======================================================
     EXAMPLE STEP
  ======================================================= */

  exampleStep: {
    flexDirection: 'row',

    alignItems: 'flex-start',

    marginTop: 14,

    paddingTop: 12,

    borderTopWidth: 1,

    borderTopColor: '#F0F3F7',
  },

  stepNumber: {
    width: 25,

    height: 25,

    borderRadius: 8,

    backgroundColor: PRIMARY,

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 10,
  },

  stepNumberText: {
    color: WHITE,

    fontSize: 10,

    fontWeight: '900',
  },

  exampleText: {
    flex: 1,

    fontSize: 11.5,

    color: '#526174',

    lineHeight: 18,
  },

  /* =======================================================
     REFERRAL FLOW
  ======================================================= */

  flowCard: {
    marginTop: 14,

    backgroundColor: DARK_BLUE,

    borderRadius: 16,

    padding: 16,

    overflow: 'hidden',
  },

  flowTitle: {
    fontSize: 14,

    fontWeight: '900',

    color: WHITE,
  },

  flowSubtitle: {
    fontSize: 9.5,

    color: '#B8C8E2',

    marginTop: 3,
  },

  flowRow: {
    marginTop: 18,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },

  flowItem: {
    alignItems: 'center',

    width: 40,
  },

  flowCircle: {
    width: 32,

    height: 32,

    borderRadius: 16,

    backgroundColor: WHITE,

    alignItems: 'center',

    justifyContent: 'center',

    borderWidth: 2,

    borderColor: GOLD,
  },

  flowLevel: {
    fontSize: 9,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  flowPercent: {
    marginTop: 4,

    fontSize: 9,

    fontWeight: '800',

    color: WHITE,
  },

  flowLine: {
    flex: 1,

    maxWidth: 20,

    height: 1,

    backgroundColor: '#536B92',

    marginHorizontal: 2,

    marginBottom: 14,
  },

  /* =======================================================
     FOOTER
  ======================================================= */

  footer: {
    marginTop: 25,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    gap: 8,
  },

  footerLine: {
    width: 30,

    height: 1,

    backgroundColor: '#CBD5E1',
  },

  footerText: {
    fontSize: 8,

    fontWeight: '800',

    letterSpacing: 1,

    color: MUTED,
  },

});