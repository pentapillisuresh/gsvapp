import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  Users,
  UserCheck,
  UserX,
  Wallet,
  TrendingUp,
} from 'lucide-react-native';

import { useRouter } from 'expo-router';

import {
  MLM_TEAM_REPORT,
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

  SOFT_BLUE: 'rgba(3, 69, 189, 0.10)',
  SOFT_GOLD: 'rgba(252, 225, 89, 0.25)',
};

export default function MLMTeam() {
  const router = useRouter();

  const maxInvestment = 1800000;

  return (
    <View style={styles.container}>

      {/* Header */}
      <Header
        title="Team Reports"
        subtitle="Level-wise network report"
        onBack={() => router.back()}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* ---------------- HERO SUMMARY ---------------- */}

        <View style={styles.heroCard}>

          <View style={styles.heroTop}>

            <View style={styles.heroIcon}>
              <Users
                size={24}
                color={COLORS.DARK_BLUE}
                strokeWidth={2.3}
              />
            </View>

            <View style={styles.heroInfo}>
              <Text style={styles.heroLabel}>
                TOTAL NETWORK
              </Text>

              <Text style={styles.heroValue}>
                {MLM_TEAM_REPORT.totalTeam}
              </Text>

              <Text style={styles.heroSubtext}>
                Members across all 5 levels
              </Text>
            </View>

          </View>

          <View style={styles.heroDivider} />

          <View style={styles.heroBottom}>

            <View>
              <Text style={styles.heroBottomLabel}>
                Total Team Investment
              </Text>

              <Text style={styles.heroInvestment}>
                ₹
                {MLM_TEAM_REPORT.totalInvestment.toLocaleString(
                  'en-IN',
                )}
              </Text>
            </View>

            <View style={styles.heroTrend}>
              <TrendingUp
                size={14}
                color={COLORS.PRIMARY}
              />

              <Text style={styles.heroTrendText}>
                5 Levels
              </Text>
            </View>

          </View>

        </View>

        {/* ---------------- STAT GRID ---------------- */}

        <View style={styles.grid}>

          {/* Total Team */}
          <View style={styles.statCard}>

            <View
              style={[
                styles.statIcon,
                styles.blueIcon,
              ]}
            >
              <Users
                size={18}
                color={COLORS.PRIMARY}
                strokeWidth={2.3}
              />
            </View>

            <Text style={styles.statTitle}>
              Total Team
            </Text>

            <Text style={styles.statValue}>
              {MLM_TEAM_REPORT.totalTeam}
            </Text>

            <Text style={styles.statCaption}>
              All members
            </Text>

          </View>

          {/* Active */}
          <View style={styles.statCard}>

            <View
              style={[
                styles.statIcon,
                styles.goldIcon,
              ]}
            >
              <UserCheck
                size={18}
                color={COLORS.DARK_BLUE}
                strokeWidth={2.3}
              />
            </View>

            <Text style={styles.statTitle}>
              Active Members
            </Text>

            <Text style={styles.statValue}>
              {MLM_TEAM_REPORT.activeMembers}
            </Text>

            <Text style={styles.statCaption}>
              Currently active
            </Text>

          </View>

          {/* Inactive */}
          <View style={styles.statCard}>

            <View
              style={[
                styles.statIcon,
                styles.blueIcon,
              ]}
            >
              <UserX
                size={18}
                color={COLORS.PRIMARY}
                strokeWidth={2.3}
              />
            </View>

            <Text style={styles.statTitle}>
              Inactive Members
            </Text>

            <Text style={styles.statValue}>
              {MLM_TEAM_REPORT.inactiveMembers}
            </Text>

            <Text style={styles.statCaption}>
              Currently inactive
            </Text>

          </View>

          {/* Investment */}
          <View style={styles.statCard}>

            <View
              style={[
                styles.statIcon,
                styles.goldIcon,
              ]}
            >
              <Wallet
                size={18}
                color={COLORS.DARK_BLUE}
                strokeWidth={2.3}
              />
            </View>

            <Text style={styles.statTitle}>
              Team Investment
            </Text>

            <Text
              style={styles.investmentValue}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              ₹
              {MLM_TEAM_REPORT.totalInvestment.toLocaleString(
                'en-IN',
              )}
            </Text>

            <Text style={styles.statCaption}>
              Total network investment
            </Text>

          </View>

        </View>

        {/* ---------------- SECTION TITLE ---------------- */}

        <View style={styles.sectionHeader}>

          <View>
            <Text style={styles.sectionTitle}>
              Level-wise Team
            </Text>

            <Text style={styles.sectionSubtitle}>
              Network distribution across 5 levels
            </Text>
          </View>

          <View style={styles.levelCount}>
            <Text style={styles.levelCountText}>
              5 Levels
            </Text>
          </View>

        </View>

        {/* ---------------- LEVEL CARDS ---------------- */}

        {MLM_TEAM_REPORT.levels.map((item) => {

          const progress =
            item.investment / maxInvestment;

          const progressPercentage =
            Math.min(progress * 100, 100);

          return (
            <View
              key={item.level}
              style={styles.levelCard}
            >

              {/* Top Row */}
              <View style={styles.cardTop}>

                <View style={styles.levelIcon}>
                  <Text style={styles.levelNumber}>
                    {item.level}
                  </Text>
                </View>

                <View style={styles.info}>

                  <Text style={styles.levelName}>
                    Level {item.level}
                  </Text>

                  <Text style={styles.members}>
                    {item.members}{' '}
                    {item.members === 1
                      ? 'Member'
                      : 'Members'}
                  </Text>

                </View>

                <View style={styles.incomeContainer}>

                  <Text style={styles.incomeLabel}>
                    Income
                  </Text>

                  <Text style={styles.income}>
                    ₹
                    {item.income.toLocaleString(
                      'en-IN',
                    )}
                  </Text>

                </View>

              </View>

              {/* Investment Progress */}
              <View style={styles.progressHeader}>

                <Text style={styles.progressLabel}>
                  Team Investment
                </Text>

                <Text style={styles.progressPercentage}>
                  {Math.round(progressPercentage)}%
                </Text>

              </View>

              <View style={styles.progressBackground}>

                <View
                  style={[
                    styles.progress,
                    {
                      width: `${progressPercentage}%`,
                    },
                  ]}
                />

              </View>

              {/* Bottom Information */}
              <View style={styles.bottom}>

                <View>
                  <Text style={styles.bottomLabel}>
                    Investment
                  </Text>

                  <Text style={styles.bottomValue}>
                    ₹
                    {item.investment.toLocaleString(
                      'en-IN',
                    )}
                  </Text>
                </View>

                <View style={styles.bottomRight}>

                  <Text style={styles.bottomLabel}>
                    Members
                  </Text>

                  <Text style={styles.bottomValue}>
                    {item.members}
                  </Text>

                </View>

              </View>

            </View>
          );
        })}

        {/* ---------------- FOOTER INFO ---------------- */}

        <View style={styles.infoCard}>

          <View style={styles.infoIcon}>
            <Users
              size={17}
              color={COLORS.PRIMARY}
              strokeWidth={2.2}
            />
          </View>

          <View style={styles.infoContent}>

            <Text style={styles.infoTitle}>
              Team Report
            </Text>

            <Text style={styles.infoText}>
              This report shows your referral network,
              member distribution and investment
              contribution across each MLM level.
            </Text>

          </View>

        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  /* =====================================================
     CONTAINER
  ===================================================== */

  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },

  content: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 40,
  },

  /* =====================================================
     HERO
  ===================================================== */

  heroCard: {
    backgroundColor: COLORS.PRIMARY,

    borderRadius: 18,

    padding: 17,

    marginBottom: 12,

    shadowColor: COLORS.DARK_BLUE,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.14,
    shadowRadius: 14,
    elevation: 4,
  },

  heroTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  heroIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,

    backgroundColor: COLORS.GOLD,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  heroInfo: {
    flex: 1,
  },

  heroLabel: {
    color: 'rgba(255,255,255,0.72)',

    fontSize: 8,
    fontWeight: '900',

    letterSpacing: 1,
  },

  heroValue: {
    color: COLORS.WHITE,

    fontSize: 27,
    fontWeight: '900',

    marginTop: 2,
  },

  heroSubtext: {
    color: 'rgba(255,255,255,0.78)',

    fontSize: 9,
    fontWeight: '600',

    marginTop: 1,
  },

  heroDivider: {
    height: 1,

    backgroundColor: 'rgba(255,255,255,0.16)',

    marginVertical: 14,
  },

  heroBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  heroBottomLabel: {
    color: 'rgba(255,255,255,0.68)',

    fontSize: 8,
    fontWeight: '600',
  },

  heroInvestment: {
    color: COLORS.WHITE,

    fontSize: 16,
    fontWeight: '900',

    marginTop: 2,
  },

  heroTrend: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 9,
    paddingVertical: 6,

    borderRadius: 8,

    backgroundColor: COLORS.GOLD,
  },

  heroTrendText: {
    color: COLORS.DARK_BLUE,

    fontSize: 8,
    fontWeight: '900',

    marginLeft: 4,
  },

  /* =====================================================
     STAT GRID
  ===================================================== */

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    marginBottom: 6,
  },

  statCard: {
    width: '48.4%',

    backgroundColor: COLORS.WHITE,

    borderWidth: 1,
    borderColor: COLORS.BORDER,

    borderRadius: 14,

    padding: 12,

    marginBottom: 10,

    shadowColor: COLORS.DARK_BLUE,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.035,
    shadowRadius: 7,
    elevation: 1,
  },

  statIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 9,
  },

  blueIcon: {
    backgroundColor: COLORS.LIGHT_BLUE,
  },

  goldIcon: {
    backgroundColor: COLORS.LIGHT_GOLD,
  },

  statTitle: {
    color: COLORS.MUTED,

    fontSize: 8.5,
    fontWeight: '700',

    minHeight: 21,
  },

  statValue: {
    color: COLORS.TEXT,

    fontSize: 19,
    fontWeight: '900',

    marginTop: 2,
  },

  investmentValue: {
    color: COLORS.TEXT,

    fontSize: 15,
    fontWeight: '900',

    marginTop: 5,
  },

  statCaption: {
    color: '#94A3B8',

    fontSize: 7.5,
    fontWeight: '600',

    marginTop: 3,
  },

  /* =====================================================
     SECTION
  ===================================================== */

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 10,
    marginBottom: 11,
  },

  sectionTitle: {
    color: COLORS.TEXT,

    fontSize: 17,
    fontWeight: '900',
  },

  sectionSubtitle: {
    color: COLORS.MUTED,

    fontSize: 9,
    fontWeight: '600',

    marginTop: 3,
  },

  levelCount: {
    backgroundColor: COLORS.LIGHT_GOLD,

    borderRadius: 8,

    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  levelCountText: {
    color: COLORS.DARK_BLUE,

    fontSize: 8,
    fontWeight: '900',
  },

  /* =====================================================
     LEVEL CARD
  ===================================================== */

  levelCard: {
    backgroundColor: COLORS.WHITE,

    borderWidth: 1,
    borderColor: COLORS.BORDER,

    borderRadius: 15,

    padding: 14,

    marginBottom: 10,

    shadowColor: COLORS.DARK_BLUE,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.035,
    shadowRadius: 8,
    elevation: 1,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  levelIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,

    backgroundColor: COLORS.LIGHT_GOLD,

    borderWidth: 1,
    borderColor: 'rgba(252,225,89,0.45)',

    alignItems: 'center',
    justifyContent: 'center',
  },

  levelNumber: {
    color: COLORS.DARK_BLUE,

    fontSize: 16,
    fontWeight: '900',
  },

  info: {
    flex: 1,

    marginLeft: 11,
  },

  levelName: {
    color: COLORS.TEXT,

    fontSize: 14,
    fontWeight: '900',
  },

  members: {
    color: COLORS.MUTED,

    fontSize: 9,
    fontWeight: '600',

    marginTop: 3,
  },

  incomeContainer: {
    alignItems: 'flex-end',
  },

  incomeLabel: {
    color: '#94A3B8',

    fontSize: 7,
    fontWeight: '700',

    textTransform: 'uppercase',
  },

  income: {
    color: COLORS.PRIMARY,

    fontSize: 14,
    fontWeight: '900',

    marginTop: 2,
  },

  /* =====================================================
     PROGRESS
  ===================================================== */

  progressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 15,
    marginBottom: 6,
  },

  progressLabel: {
    color: COLORS.MUTED,

    fontSize: 8,
    fontWeight: '700',
  },

  progressPercentage: {
    color: COLORS.PRIMARY,

    fontSize: 8,
    fontWeight: '900',
  },

  progressBackground: {
    height: 7,

    borderRadius: 5,

    backgroundColor: '#E9EEF6',

    overflow: 'hidden',
  },

  progress: {
    height: 7,

    backgroundColor: COLORS.PRIMARY,

    borderRadius: 5,
  },

  /* =====================================================
     BOTTOM
  ===================================================== */

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 11,

    paddingTop: 10,

    borderTopWidth: 1,
    borderTopColor: '#EEF2F7',
  },

  bottomRight: {
    alignItems: 'flex-end',
  },

  bottomLabel: {
    color: '#94A3B8',

    fontSize: 7.5,
    fontWeight: '700',
  },

  bottomValue: {
    color: COLORS.TEXT,

    fontSize: 10.5,
    fontWeight: '900',

    marginTop: 2,
  },

  /* =====================================================
     INFO CARD
  ===================================================== */

  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: COLORS.WHITE,

    borderWidth: 1,
    borderColor: COLORS.BORDER,

    borderRadius: 14,

    padding: 12,

    marginTop: 3,
  },

  infoIcon: {
    width: 34,
    height: 34,
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