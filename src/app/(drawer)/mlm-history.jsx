import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  CheckCircle,
  Clock,
  ChevronRight,
} from 'lucide-react-native';

import { useRouter } from 'expo-router';

import {
  MLM_INCOME_HISTORY,
} from '../../data/mockData';

import {
  Header,
} from '../../components/mlm/MlmComponents';

const COLORS = {
  PRIMARY: '#0345BD',
  DARK_BLUE: '#06275F',
  GOLD: '#FCE159',

  BACKGROUND: '#F6F8FC',
  WHITE: '#FFFFFF',

  TEXT: '#102A56',
  MUTED: '#64748B',

  BORDER: '#E1E8F2',

  LIGHT_BLUE: 'rgba(3, 69, 189, 0.07)',
  LIGHT_GOLD: 'rgba(252, 225, 89, 0.18)',

  PAID_BG: 'rgba(3, 69, 189, 0.08)',
  PENDING_BG: 'rgba(252, 225, 89, 0.22)',
};

export default function MLMHistory() {
  const router = useRouter();

  const [filter, setFilter] = useState('All');

  const filters = [
    'All',
    'Level 1',
    'Level 2',
    'Level 3',
    'Level 4',
    'Level 5',
  ];

  const filtered = MLM_INCOME_HISTORY.filter((item) => {
    if (filter === 'All') {
      return true;
    }

    return (
      item.level ===
      Number(filter.replace('Level ', ''))
    );
  });

  return (
    <View style={styles.container}>

      {/* Header */}
      <Header
        title="Income History"
        subtitle="MLM commission transactions"
        onBack={() => router.back()}
      />

      {/* Filter Tabs */}
      <View style={styles.filterWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          {filters.map((item) => {
            const active = filter === item;

            return (
              <TouchableOpacity
                key={item}
                activeOpacity={0.8}
                onPress={() => setFilter(item)}
                style={[
                  styles.filter,
                  active && styles.activeFilter,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    active && styles.activeFilterText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Transaction List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        {/* Result Summary */}
        <View style={styles.resultHeader}>
          <View>
            <Text style={styles.resultTitle}>
              Transactions
            </Text>

            <Text style={styles.resultSubtitle}>
              {filtered.length} commission{' '}
              {filtered.length === 1
                ? 'transaction'
                : 'transactions'}
            </Text>
          </View>

          <View style={styles.resultBadge}>
            <Text style={styles.resultBadgeText}>
              {filter}
            </Text>
          </View>
        </View>

        {filtered.length === 0 ? (
          <View style={styles.emptyCard}>
            <View style={styles.emptyIcon}>
              <Clock
                size={25}
                color={COLORS.PRIMARY}
              />
            </View>

            <Text style={styles.emptyTitle}>
              No Transactions Found
            </Text>

            <Text style={styles.emptyText}>
              There are no MLM commission transactions
              available for this level.
            </Text>
          </View>
        ) : (
          filtered.map((item) => {
            const isPaid = item.status === 'Paid';

            return (
              <View
                key={item.id}
                style={styles.card}
              >

                {/* Left Status Icon */}
                <View
                  style={[
                    styles.icon,
                    isPaid
                      ? styles.paidIcon
                      : styles.pendingIcon,
                  ]}
                >
                  {isPaid ? (
                    <CheckCircle
                      size={21}
                      color={COLORS.PRIMARY}
                      strokeWidth={2.4}
                    />
                  ) : (
                    <Clock
                      size={21}
                      color={COLORS.DARK_BLUE}
                      strokeWidth={2.4}
                    />
                  )}
                </View>

                {/* Main Information */}
                <View style={styles.info}>

                  <View style={styles.nameRow}>
                    <Text
                      style={styles.from}
                      numberOfLines={1}
                    >
                      {item.fromUser}
                    </Text>

                    <View style={styles.levelBadge}>
                      <Text style={styles.levelBadgeText}>
                        L{item.level}
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.fromLabel}>
                    Commission received from
                  </Text>

                  <Text style={styles.date}>
                    {item.date}
                  </Text>

                  <View style={styles.detailsRow}>

                    <View style={styles.detailItem}>
                      <Text style={styles.detailLabel}>
                        Rate
                      </Text>

                      <Text style={styles.detailValue}>
                        {item.percentage}%
                      </Text>
                    </View>

                    <View style={styles.detailDivider} />

                    <View style={styles.detailItem}>
                      <Text style={styles.detailLabel}>
                        Investment
                      </Text>

                      <Text
                        style={styles.detailValue}
                        numberOfLines={1}
                      >
                        ₹
                        {item.investmentAmount.toLocaleString(
                          'en-IN',
                        )}
                      </Text>
                    </View>

                  </View>
                </View>

                {/* Right Amount */}
                <View style={styles.right}>

                  <Text style={styles.amount}>
                    ₹
                    {item.commission.toLocaleString(
                      'en-IN',
                    )}
                  </Text>

                  <View
                    style={[
                      styles.status,
                      isPaid
                        ? styles.paid
                        : styles.pending,
                    ]}
                  >
                    <View
                      style={[
                        styles.statusDot,
                        isPaid
                          ? styles.paidDot
                          : styles.pendingDot,
                      ]}
                    />

                    <Text
                      style={[
                        styles.statusText,
                        isPaid
                          ? styles.paidText
                          : styles.pendingText,
                      ]}
                    >
                      {item.status}
                    </Text>
                  </View>

                </View>

              </View>
            );
          })
        )}

        {/* Bottom Info */}
        {filtered.length > 0 && (
          <View style={styles.infoCard}>

            <View style={styles.infoIcon}>
              <ChevronRight
                size={18}
                color={COLORS.PRIMARY}
              />
            </View>

            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>
                Commission History
              </Text>

              <Text style={styles.infoText}>
                Each transaction represents MLM income
                generated from an investment within your
                referral network.
              </Text>
            </View>

          </View>
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },

  /* ---------------- FILTERS ---------------- */

  filterWrapper: {
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.BORDER,
  },

  filters: {
    paddingHorizontal: 15,
    paddingVertical: 11,
    gap: 7,
  },

  filter: {
    height: 34,
    minWidth: 54,
    paddingHorizontal: 11,
    borderRadius: 9,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: COLORS.WHITE,

    borderWidth: 1,
    borderColor: COLORS.BORDER,
  },

  activeFilter: {
    backgroundColor: COLORS.PRIMARY,
    borderColor: COLORS.PRIMARY,
  },

  filterText: {
    color: COLORS.MUTED,
    fontSize: 10,
    fontWeight: '800',
  },

  activeFilterText: {
    color: COLORS.WHITE,
  },

  /* ---------------- CONTENT ---------------- */

  content: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 40,
  },

  /* ---------------- RESULT HEADER ---------------- */

  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 12,
  },

  resultTitle: {
    color: COLORS.TEXT,
    fontSize: 16,
    fontWeight: '900',
  },

  resultSubtitle: {
    color: COLORS.MUTED,
    fontSize: 10,
    fontWeight: '600',
    marginTop: 3,
  },

  resultBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,

    backgroundColor: COLORS.LIGHT_BLUE,

    borderWidth: 1,
    borderColor: 'rgba(3, 69, 189, 0.12)',
  },

  resultBadgeText: {
    color: COLORS.PRIMARY,
    fontSize: 9,
    fontWeight: '800',
  },

  /* ---------------- TRANSACTION CARD ---------------- */

  card: {
    backgroundColor: COLORS.WHITE,

    borderWidth: 1,
    borderColor: COLORS.BORDER,

    borderRadius: 15,

    padding: 12,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 10,

    shadowColor: '#06275F',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.045,
    shadowRadius: 10,
    elevation: 2,
  },

  /* ---------------- ICON ---------------- */

  icon: {
    width: 40,
    height: 40,
    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  paidIcon: {
    backgroundColor: COLORS.PAID_BG,
  },

  pendingIcon: {
    backgroundColor: COLORS.PENDING_BG,
  },

  /* ---------------- INFO ---------------- */

  info: {
    flex: 1,
    minWidth: 0,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 2,
  },

  from: {
    flexShrink: 1,

    color: COLORS.TEXT,

    fontSize: 12,
    fontWeight: '900',
  },

  levelBadge: {
    marginLeft: 6,

    paddingHorizontal: 6,
    paddingVertical: 2,

    borderRadius: 5,

    backgroundColor: COLORS.LIGHT_GOLD,
  },

  levelBadgeText: {
    color: COLORS.DARK_BLUE,
    fontSize: 8,
    fontWeight: '900',
  },

  fromLabel: {
    color: COLORS.MUTED,

    fontSize: 8,
    fontWeight: '600',

    marginTop: 1,
  },

  date: {
    color: COLORS.MUTED,

    fontSize: 8.5,
    fontWeight: '600',

    marginTop: 3,
  },

  /* ---------------- DETAILS ---------------- */

  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 7,
  },

  detailItem: {
    flexShrink: 1,
  },

  detailLabel: {
    color: '#94A3B8',

    fontSize: 7,
    fontWeight: '700',

    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },

  detailValue: {
    color: COLORS.TEXT,

    fontSize: 8.5,
    fontWeight: '800',

    marginTop: 2,
  },

  detailDivider: {
    width: 1,
    height: 20,

    backgroundColor: COLORS.BORDER,

    marginHorizontal: 8,
  },

  /* ---------------- RIGHT ---------------- */

  right: {
    alignItems: 'flex-end',
    justifyContent: 'center',

    marginLeft: 7,
  },

  amount: {
    color: COLORS.PRIMARY,

    fontSize: 13,
    fontWeight: '900',
  },

  /* ---------------- STATUS ---------------- */

  status: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 7,
    paddingVertical: 4,

    borderRadius: 7,

    marginTop: 6,
  },

  paid: {
    backgroundColor: COLORS.PAID_BG,
  },

  pending: {
    backgroundColor: COLORS.PENDING_BG,
  },

  statusDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,

    marginRight: 4,
  },

  paidDot: {
    backgroundColor: COLORS.PRIMARY,
  },

  pendingDot: {
    backgroundColor: COLORS.DARK_BLUE,
  },

  statusText: {
    fontSize: 8,
    fontWeight: '900',
  },

  paidText: {
    color: COLORS.PRIMARY,
  },

  pendingText: {
    color: COLORS.DARK_BLUE,
  },

  /* ---------------- EMPTY ---------------- */

  emptyCard: {
    backgroundColor: COLORS.WHITE,

    borderWidth: 1,
    borderColor: COLORS.BORDER,

    borderRadius: 16,

    paddingHorizontal: 25,
    paddingVertical: 35,

    alignItems: 'center',
  },

  emptyIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: COLORS.LIGHT_BLUE,

    marginBottom: 12,
  },

  emptyTitle: {
    color: COLORS.TEXT,

    fontSize: 14,
    fontWeight: '900',

    textAlign: 'center',
  },

  emptyText: {
    color: COLORS.MUTED,

    fontSize: 10,
    lineHeight: 16,

    textAlign: 'center',

    marginTop: 6,
  },

  /* ---------------- INFO CARD ---------------- */

  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: COLORS.WHITE,

    borderWidth: 1,
    borderColor: COLORS.BORDER,

    borderRadius: 14,

    padding: 12,

    marginTop: 4,
  },

  infoIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: COLORS.LIGHT_BLUE,

    marginRight: 10,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    color: COLORS.TEXT,

    fontSize: 10,
    fontWeight: '900',
  },

  infoText: {
    color: COLORS.MUTED,

    fontSize: 8.5,
    lineHeight: 13,

    marginTop: 3,
  },
});