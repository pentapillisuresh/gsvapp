import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  Wallet,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Percent,
  Users,
} from 'lucide-react-native';

import { useRouter } from 'expo-router';

import {
  MLM_SUMMARY,
  MLM_LEVEL_DATA,
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

export default function MLMIncome() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.headerWrapper}>
        <Header
          title="MLM Income"
          subtitle="Your referral earnings"
          onBack={() => router.back()}
        />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* =================================================
            TOTAL INCOME HERO
        ================================================= */}

        <View style={styles.incomeHero}>

          <View style={styles.heroTopLine} />

          <View style={styles.heroLeft}>

            <View style={styles.heroIcon}>
              <Wallet
                size={22}
                color={DARK_BLUE}
                strokeWidth={2.3}
              />
            </View>

            <View>

              <Text style={styles.heroLabel}>
                TOTAL MLM INCOME
              </Text>

              <Text style={styles.heroAmount}>
                ₹
                {MLM_SUMMARY.totalMLMIncome.toLocaleString(
                  'en-IN',
                )}
              </Text>

              <View style={styles.heroStatus}>

                <TrendingUp
                  size={12}
                  color={PRIMARY}
                  strokeWidth={2.5}
                />

                <Text style={styles.heroStatusText}>
                  Referral commission earnings
                </Text>

              </View>

            </View>

          </View>

          <View style={styles.heroBadge}>

            <Percent
              size={15}
              color={DARK_BLUE}
              strokeWidth={2.5}
            />

          </View>

        </View>

        {/* =================================================
            STAT CARDS
        ================================================= */}

        <View style={styles.statsGrid}>

          {/* THIS MONTH */}

          <IncomeStat
            title="This Month"
            value={MLM_SUMMARY.thisMonthIncome}
            icon={TrendingUp}
            iconType="blue"
          />

          {/* PENDING */}

          <IncomeStat
            title="Pending"
            value={MLM_SUMMARY.pendingIncome}
            icon={Clock}
            iconType="gold"
          />

          {/* PAID */}

          <IncomeStat
            title="Paid"
            value={MLM_SUMMARY.paidIncome}
            icon={CheckCircle}
            iconType="blue"
          />

          {/* TEAM */}

          <IncomeStat
            title="Team Members"
            value={MLM_SUMMARY.totalTeam}
            icon={Users}
            iconType="gold"
            isCount
          />

        </View>

        {/* =================================================
            LEVEL SECTION HEADER
        ================================================= */}

        <View style={styles.sectionHeader}>

          <View>

            <Text style={styles.sectionTitle}>
              Income by Level
            </Text>

            <Text style={styles.sectionSubtitle}>
              Your earnings across 5 referral levels
            </Text>

          </View>

          <View style={styles.sectionIcon}>
            <Percent
              size={17}
              color={PRIMARY}
              strokeWidth={2.4}
            />
          </View>

        </View>

        {/* =================================================
            LEVEL INCOME CARDS
        ================================================= */}

        {MLM_LEVEL_DATA.map((item) => (

          <View
            key={item.level}
            style={styles.levelIncomeCard}
          >

            {/* LEVEL */}

            <View
              style={[
                styles.levelCircle,
                item.level === 5 &&
                  styles.levelCircleGold,
              ]}
            >

              <Text
                style={[
                  styles.levelNumber,
                  item.level === 5 &&
                    styles.levelNumberGold,
                ]}
              >
                {item.level}
              </Text>

            </View>

            {/* INFO */}

            <View style={styles.levelInfo}>

              <View style={styles.levelTitleRow}>

                <Text style={styles.levelName}>
                  Level {item.level}
                </Text>

                <View style={styles.percentBadge}>

                  <Text style={styles.percentText}>
                    {item.percentage}%
                  </Text>

                </View>

              </View>

              <Text style={styles.levelMembers}>
                {item.members} members
              </Text>

              <Text style={styles.levelInvestment}>
                Team Investment: ₹
                {item.investment.toLocaleString(
                  'en-IN',
                )}
              </Text>

            </View>

            {/* INCOME */}

            <View style={styles.incomeRight}>

              <Text style={styles.incomeSmallLabel}>
                INCOME
              </Text>

              <Text style={styles.levelAmount}>
                ₹
                {item.income.toLocaleString(
                  'en-IN',
                )}
              </Text>

            </View>

          </View>

        ))}

        {/* =================================================
            INCOME TOTAL CARD
        ================================================= */}

        <View style={styles.breakdownCard}>

          <View style={styles.breakdownHeader}>

            <View>

              <Text style={styles.breakdownTitle}>
                Commission Breakdown
              </Text>

              <Text style={styles.breakdownSubtitle}>
                Total earnings from all levels
              </Text>

            </View>

            <View style={styles.breakdownIcon}>
              <Wallet
                size={18}
                color={PRIMARY}
                strokeWidth={2.3}
              />
            </View>

          </View>

          <View style={styles.breakdownLine} />

          <View style={styles.breakdownRow}>

            <Text style={styles.breakdownLabel}>
              Level 1–5 Income
            </Text>

            <Text style={styles.breakdownValue}>
              ₹
              {MLM_SUMMARY.totalMLMIncome.toLocaleString(
                'en-IN',
              )}
            </Text>

          </View>

          <View style={styles.breakdownRow}>

            <Text style={styles.breakdownLabel}>
              Paid Income
            </Text>

            <Text style={styles.paidValue}>
              ₹
              {MLM_SUMMARY.paidIncome.toLocaleString(
                'en-IN',
              )}
            </Text>

          </View>

          <View style={styles.breakdownRow}>

            <Text style={styles.breakdownLabel}>
              Pending Income
            </Text>

            <Text style={styles.pendingValue}>
              ₹
              {MLM_SUMMARY.pendingIncome.toLocaleString(
                'en-IN',
              )}
            </Text>

          </View>

        </View>

        {/* =================================================
            HISTORY BUTTON
        ================================================= */}

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.historyButton}
          onPress={() =>
            router.push('/mlm-history')
          }
        >

          <View style={styles.historyIcon}>
            <Clock
              size={17}
              color={PRIMARY}
              strokeWidth={2.4}
            />
          </View>

          <View style={styles.historyButtonTextBox}>

            <Text style={styles.historyText}>
              View Complete Income History
            </Text>

            <Text style={styles.historySubtext}>
              See all commission transactions
            </Text>

          </View>

          <ArrowRight
            size={18}
            color={PRIMARY}
            strokeWidth={2.4}
          />

        </TouchableOpacity>

        {/* FOOTER */}

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
   INCOME STAT
========================================================= */

function IncomeStat({
  title,
  value,
  icon: Icon,
  iconType = 'blue',
  isCount = false,
}) {
  const iconBackground =
    iconType === 'gold'
      ? LIGHT_GOLD
      : LIGHT_BLUE;

  const iconColor =
    iconType === 'gold'
      ? DARK_BLUE
      : PRIMARY;

  return (
    <View style={styles.statCard}>

      <View
        style={[
          styles.statIcon,
          {
            backgroundColor: iconBackground,
          },
        ]}
      >

        <Icon
          size={18}
          color={iconColor}
          strokeWidth={2.4}
        />

      </View>

      <Text style={styles.statTitle}>
        {title}
      </Text>

      <Text style={styles.statValue}>

        {isCount
          ? value
          : `₹${Number(value).toLocaleString(
              'en-IN',
            )}`}

      </Text>

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

  headerWrapper: {
    paddingTop: 8,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 45,
  },

  /* =======================================================
     HERO
  ======================================================= */

  incomeHero: {
    backgroundColor: WHITE,

    borderRadius: 18,

    borderWidth: 1,

    borderColor: BORDER,

    padding: 16,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

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

  heroLeft: {
    flexDirection: 'row',

    alignItems: 'center',

    flex: 1,
  },

  heroIcon: {
    width: 48,

    height: 48,

    borderRadius: 14,

    backgroundColor: LIGHT_GOLD,

    borderWidth: 1,

    borderColor: 'rgba(252,225,89,0.50)',

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 12,
  },

  heroLabel: {
    fontSize: 8.5,

    fontWeight: '900',

    color: MUTED,

    letterSpacing: 0.7,
  },

  heroAmount: {
    marginTop: 2,

    fontSize: 23,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  heroStatus: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 4,

    gap: 4,
  },

  heroStatusText: {
    fontSize: 9,

    color: MUTED,

    fontWeight: '500',
  },

  heroBadge: {
    width: 38,

    height: 38,

    borderRadius: 11,

    backgroundColor: LIGHT_BLUE,

    alignItems: 'center',

    justifyContent: 'center',
  },

  /* =======================================================
     STATS
  ======================================================= */

  statsGrid: {
    marginTop: 12,

    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'space-between',

    rowGap: 10,
  },

  statCard: {
    width: '48.3%',

    minHeight: 112,

    backgroundColor: WHITE,

    borderRadius: 14,

    borderWidth: 1,

    borderColor: BORDER,

    padding: 13,

    shadowColor: '#0B1F3A',

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowOpacity: 0.035,

    shadowRadius: 6,

    elevation: 1,
  },

  statIcon: {
    width: 32,

    height: 32,

    borderRadius: 9,

    alignItems: 'center',

    justifyContent: 'center',
  },

  statTitle: {
    marginTop: 9,

    fontSize: 9.5,

    color: MUTED,

    fontWeight: '700',
  },

  statValue: {
    marginTop: 3,

    fontSize: 16,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  /* =======================================================
     SECTION
  ======================================================= */

  sectionHeader: {
    marginTop: 22,

    marginBottom: 11,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  sectionTitle: {
    fontSize: 16,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  sectionSubtitle: {
    marginTop: 3,

    fontSize: 9.5,

    color: MUTED,
  },

  sectionIcon: {
    width: 34,

    height: 34,

    borderRadius: 9,

    backgroundColor: LIGHT_BLUE,

    alignItems: 'center',

    justifyContent: 'center',
  },

  /* =======================================================
     LEVEL CARD
  ======================================================= */

  levelIncomeCard: {
    backgroundColor: WHITE,

    borderWidth: 1,

    borderColor: BORDER,

    borderRadius: 15,

    padding: 13,

    marginBottom: 9,

    flexDirection: 'row',

    alignItems: 'center',

    shadowColor: '#0B1F3A',

    shadowOffset: {
      width: 0,

      height: 2,
    },

    shadowOpacity: 0.035,

    shadowRadius: 6,

    elevation: 1,
  },

  levelCircle: {
    width: 43,

    height: 43,

    borderRadius: 22,

    backgroundColor: LIGHT_BLUE,

    borderWidth: 1,

    borderColor: 'rgba(3,69,189,0.10)',

    alignItems: 'center',

    justifyContent: 'center',
  },

  levelCircleGold: {
    backgroundColor: LIGHT_GOLD,

    borderColor: 'rgba(252,225,89,0.50)',
  },

  levelNumber: {
    color: PRIMARY,

    fontWeight: '900',

    fontSize: 14,
  },

  levelNumberGold: {
    color: DARK_BLUE,
  },

  levelInfo: {
    flex: 1,

    marginLeft: 11,

    minWidth: 0,
  },

  levelTitleRow: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  levelName: {
    fontSize: 13,

    fontWeight: '900',

    color: TEXT,
  },

  percentBadge: {
    marginLeft: 7,

    paddingHorizontal: 7,

    paddingVertical: 3,

    borderRadius: 6,

    backgroundColor: LIGHT_GOLD,

    borderWidth: 1,

    borderColor: 'rgba(252,225,89,0.40)',
  },

  percentText: {
    fontSize: 8.5,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  levelMembers: {
    fontSize: 10,

    color: MUTED,

    marginTop: 3,
  },

  levelInvestment: {
    fontSize: 9,

    color: '#7B8798',

    marginTop: 2,
  },

  incomeRight: {
    alignItems: 'flex-end',

    marginLeft: 7,
  },

  incomeSmallLabel: {
    fontSize: 7.5,

    color: MUTED,

    fontWeight: '800',

    letterSpacing: 0.5,

    marginBottom: 2,
  },

  levelAmount: {
    fontSize: 13,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  /* =======================================================
     BREAKDOWN
  ======================================================= */

  breakdownCard: {
    marginTop: 5,

    backgroundColor: WHITE,

    borderRadius: 16,

    borderWidth: 1,

    borderColor: BORDER,

    padding: 16,
  },

  breakdownHeader: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  breakdownTitle: {
    fontSize: 14,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  breakdownSubtitle: {
    marginTop: 3,

    fontSize: 9.5,

    color: MUTED,
  },

  breakdownIcon: {
    width: 35,

    height: 35,

    borderRadius: 10,

    backgroundColor: LIGHT_BLUE,

    alignItems: 'center',

    justifyContent: 'center',
  },

  breakdownLine: {
    height: 1,

    backgroundColor: '#EEF2F7',

    marginVertical: 12,
  },

  breakdownRow: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingVertical: 7,
  },

  breakdownLabel: {
    fontSize: 11,

    color: MUTED,

    fontWeight: '600',
  },

  breakdownValue: {
    fontSize: 12,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  paidValue: {
    fontSize: 12,

    fontWeight: '900',

    color: PRIMARY,
  },

  pendingValue: {
    fontSize: 12,

    fontWeight: '900',

    color: DARK_BLUE,
  },

  /* =======================================================
     HISTORY BUTTON
  ======================================================= */

  historyButton: {
    marginTop: 14,

    minHeight: 60,

    backgroundColor: WHITE,

    borderWidth: 1.2,

    borderColor: PRIMARY,

    borderRadius: 13,

    paddingHorizontal: 12,

    flexDirection: 'row',

    alignItems: 'center',
  },

  historyIcon: {
    width: 35,

    height: 35,

    borderRadius: 10,

    backgroundColor: LIGHT_BLUE,

    alignItems: 'center',

    justifyContent: 'center',
  },

  historyButtonTextBox: {
    flex: 1,

    marginLeft: 10,
  },

  historyText: {
    color: PRIMARY,

    fontSize: 12,

    fontWeight: '900',
  },

  historySubtext: {
    marginTop: 2,

    fontSize: 8.5,

    color: MUTED,
  },

  /* =======================================================
     FOOTER
  ======================================================= */

  footer: {
    marginTop: 24,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    gap: 8,
  },

  footerLine: {
    width: 28,

    height: 1,

    backgroundColor: '#CBD5E1',
  },

  footerText: {
    fontSize: 7.5,

    fontWeight: '800',

    letterSpacing: 1,

    color: MUTED,
  },

});