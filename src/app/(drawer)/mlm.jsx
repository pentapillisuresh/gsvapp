import React from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  Users,
  UserPlus,
  Wallet,
  TrendingUp,
  Share2,
  GitBranch,
  Percent,
  History,
  ChevronRight,
} from 'lucide-react-native';

import { useRouter } from 'expo-router';

import {
  MLM_SUMMARY,
  MLM_LEVEL_DATA,
} from '../../data/mockData';

import {
  Header,
  StatCard,
  SectionTitle,
  LevelCard,
  COLORS,
} from '../../components/mlm/MlmComponents';


// ======================================================
// BRAND COLORS
// ======================================================

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


// ======================================================
// MLM DASHBOARD
// ======================================================

export default function MLMDashboard() {

  const router = useRouter();


  return (

    <View style={styles.container}>

      {/* ==================================================
          HEADER
      ================================================== */}

      <View style={styles.headerWrapper}>

        <Header
          title="MLM Dashboard"
          subtitle="Referral & commission overview"
        />

      </View>


      {/* ==================================================
          CONTENT
      ================================================== */}

      <ScrollView

        showsVerticalScrollIndicator={false}

        contentContainerStyle={
          styles.content
        }
      >


        {/* ==================================================
            REFERRAL CARD
        ================================================== */}

        <View style={styles.referralCard}>


          {/* TOP GOLD LINE */}

          <View
            style={
              styles.referralGoldLine
            }
          />


          <View
            style={
              styles.referralTop
            }
          >


            {/* LEFT */}

            <View
              style={
                styles.referralInfo
              }
            >

              <View
                style={
                  styles.referralIconBox
                }
              >

                <Users
                  size={19}
                  color={GOLD}
                />

              </View>


              <View>

                <Text
                  style={
                    styles.referralLabel
                  }
                >
                  My Referral Code
                </Text>

                <Text
                  style={
                    styles.referralCode
                  }
                >
                  {MLM_SUMMARY.referralCode}
                </Text>

              </View>

            </View>


            {/* SHARE */}

            <TouchableOpacity

              style={
                styles.shareButton
              }

              activeOpacity={0.85}

              onPress={() =>
                router.push(
                  '/mlm-code'
                )
              }
            >

              <Share2
                size={17}
                color={DARK_BLUE}
              />

              <Text
                style={
                  styles.shareText
                }
              >
                Share
              </Text>

            </TouchableOpacity>

          </View>


          {/* DIVIDER */}

          <View
            style={
              styles.referralDivider
            }
          />


          {/* LINK */}

          <View
            style={
              styles.linkContainer
            }
          >

            <Text
              style={
                styles.linkLabel
              }
            >
              Referral Link
            </Text>

            <Text
              style={
                styles.referralLink
              }
              numberOfLines={1}
            >
              {MLM_SUMMARY.referralLink}
            </Text>

          </View>

        </View>


        {/* ==================================================
            SUMMARY TITLE
        ================================================== */}

        <View
          style={
            styles.sectionHeading
          }
        >

          <Text
            style={
              styles.sectionHeadingText
            }
          >
            Network Overview
          </Text>

          <View
            style={
              styles.goldDot
            }
          />

        </View>


        {/* ==================================================
            SUMMARY
        ================================================== */}

        <View
          style={
            styles.grid
          }
        >

          <StatCard
            title="Direct Members"
            value={
              MLM_SUMMARY.directMembers
            }
            icon={UserPlus}
          />

          <StatCard
            title="Total Team"
            value={
              MLM_SUMMARY.totalTeam
            }
            icon={Users}
            color={PRIMARY}
          />

          <StatCard
            title="Team Investment"
            value={`₹${MLM_SUMMARY.totalTeamInvestment.toLocaleString(
              'en-IN'
            )}`}
            icon={Wallet}
            color={PRIMARY}
          />

          <StatCard
            title="MLM Income"
            value={`₹${MLM_SUMMARY.totalMLMIncome.toLocaleString(
              'en-IN'
            )}`}
            icon={TrendingUp}
            color={PRIMARY}
          />

        </View>


        {/* ==================================================
            MONTHLY SUMMARY
        ================================================== */}

        <View
          style={
            styles.twoCards
          }
        >


          {/* THIS MONTH */}

          <View
            style={
              styles.smallCard
            }
          >

            <View
              style={
                styles.smallCardTop
              }
            >

              <View
                style={
                  styles.smallIconBlue
                }
              >

                <TrendingUp
                  size={16}
                  color={PRIMARY}
                />

              </View>

              <Text
                style={
                  styles.smallLabel
                }
              >
                This Month
              </Text>

            </View>


            <Text
              style={
                styles.smallValue
              }
            >
              ₹{MLM_SUMMARY.thisMonthIncome.toLocaleString(
                'en-IN'
              )}
            </Text>


            <View
              style={
                styles.goldMiniLine
              }
            />

          </View>


          {/* PENDING */}

          <View
            style={
              styles.smallCard
            }
          >

            <View
              style={
                styles.smallCardTop
              }
            >

              <View
                style={
                  styles.smallIconGold
                }
              >

                <Wallet
                  size={16}
                  color={PRIMARY}
                />

              </View>

              <Text
                style={
                  styles.smallLabel
                }
              >
                Pending Income
              </Text>

            </View>


            <Text
              style={
                styles.smallValue
              }
            >
              ₹{MLM_SUMMARY.pendingIncome.toLocaleString(
                'en-IN'
              )}
            </Text>


            <View
              style={
                styles.goldMiniLine
              }
            />

          </View>

        </View>


        {/* ==================================================
            LEVEL SECTION
        ================================================== */}

        <View
          style={
            styles.levelHeader
          }
        >

          <SectionTitle
            title="Income by Level"
            action="View All"
            onPress={() =>
              router.push(
                '/mlm-income'
              )
            }
          />

        </View>


        {/* ==================================================
            LEVEL CARDS
        ================================================== */}

        {MLM_LEVEL_DATA.map(
          (item) => (

            <View
              key={item.level}
              style={
                styles.levelWrapper
              }
            >

              <LevelCard
                {...item}
                onPress={() =>
                  router.push(
                    '/mlm-network'
                  )
                }
              />

            </View>

          )
        )}


        {/* ==================================================
            QUICK ACTIONS
        ================================================== */}

        <View
          style={
            styles.quickSection
          }
        >

          <SectionTitle
            title="Quick Actions"
          />

        </View>


        <View
          style={
            styles.quickGrid
          }
        >


          {/* SHARE REFERRAL */}

          <TouchableOpacity

            style={
              styles.quickCard
            }

            activeOpacity={0.85}

            onPress={() =>
              router.push(
                '/mlm-code'
              )
            }
          >

            <View
              style={
                styles.quickIcon
              }
            >

              <Share2
                size={21}
                color={PRIMARY}
              />

            </View>

            <Text
              style={
                styles.quickText
              }
            >
              Share Referral
            </Text>

            <ChevronRight
              size={15}
              color="#A0AEC0"
              style={
                styles.quickArrow
              }
            />

          </TouchableOpacity>


          {/* NETWORK */}

          <TouchableOpacity

            style={
              styles.quickCard
            }

            activeOpacity={0.85}

            onPress={() =>
              router.push(
                '/mlm-network'
              )
            }
          >

            <View
              style={
                styles.quickIcon
              }
            >

              <Users
                size={21}
                color={PRIMARY}
              />

            </View>

            <Text
              style={
                styles.quickText
              }
            >
              My Network
            </Text>

            <ChevronRight
              size={15}
              color="#A0AEC0"
              style={
                styles.quickArrow
              }
            />

          </TouchableOpacity>


          {/* TREE */}

          <TouchableOpacity

            style={
              styles.quickCard
            }

            activeOpacity={0.85}

            onPress={() =>
              router.push(
                '/mlm-tree'
              )
            }
          >

            <View
              style={
                styles.quickIcon
              }
            >

              <GitBranch
                size={21}
                color={PRIMARY}
              />

            </View>

            <Text
              style={
                styles.quickText
              }
            >
              Referral Tree
            </Text>

            <ChevronRight
              size={15}
              color="#A0AEC0"
              style={
                styles.quickArrow
              }
            />

          </TouchableOpacity>


          {/* COMMISSION */}

          <TouchableOpacity

            style={
              styles.quickCard
            }

            activeOpacity={0.85}

            onPress={() =>
              router.push(
                '/mlm-commission'
              )
            }
          >

            <View
              style={
                styles.quickIcon
              }
            >

              <Percent
                size={21}
                color={PRIMARY}
              />

            </View>

            <Text
              style={
                styles.quickText
              }
            >
              Commission
            </Text>

            <ChevronRight
              size={15}
              color="#A0AEC0"
              style={
                styles.quickArrow
              }
            />

          </TouchableOpacity>


          {/* HISTORY */}

          <TouchableOpacity

            style={
              styles.quickCard
            }

            activeOpacity={0.85}

            onPress={() =>
              router.push(
                '/mlm-history'
              )
            }
          >

            <View
              style={
                styles.quickIcon
              }
            >

              <History
                size={21}
                color={PRIMARY}
              />

            </View>

            <Text
              style={
                styles.quickText
              }
            >
              Income History
            </Text>

            <ChevronRight
              size={15}
              color="#A0AEC0"
              style={
                styles.quickArrow
              }
            />

          </TouchableOpacity>


        </View>


        {/* ==================================================
            BOTTOM BRAND SPACE
        ================================================== */}

        <View
          style={
            styles.bottomBrand
          }
        >

          <View
            style={
              styles.brandLine
            }
          />

          <Text
            style={
              styles.brandText
            }
          >
            GLOBAL SYNERGY VENTURES
          </Text>

          <View
            style={
              styles.brandLine
            }
          />

        </View>


      </ScrollView>

    </View>
  );
}


// ======================================================
// STYLES
// ======================================================

const styles = StyleSheet.create({

  // ====================================================
  // MAIN
  // ====================================================

  container: {
    flex: 1,

    backgroundColor:
      BACKGROUND,
  },


  // ====================================================
  // HEADER
  // ====================================================

  headerWrapper: {

    paddingTop: 12,

    paddingHorizontal: 4,

    backgroundColor:
      WHITE,

    borderBottomWidth: 1,

    borderBottomColor:
      BORDER,

    paddingBottom: 4,

  },


  // ====================================================
  // CONTENT
  // ====================================================

  content: {

    paddingHorizontal: 16,

    paddingTop: 18,

    paddingBottom: 45,

  },


  // ====================================================
  // REFERRAL CARD
  // ====================================================

  referralCard: {

    backgroundColor:
      PRIMARY,

    borderRadius: 20,

    padding: 18,

    marginBottom: 20,

    overflow: 'hidden',

    borderWidth: 1,

    borderColor:
      'rgba(252,225,89,0.25)',

    shadowColor:
      PRIMARY,

    shadowOpacity: 0.20,

    shadowRadius: 16,

    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 6,

  },


  referralGoldLine: {

    position: 'absolute',

    top: 0,

    left: 18,

    right: 18,

    height: 3,

    borderBottomLeftRadius: 5,

    borderBottomRightRadius: 5,

    backgroundColor:
      GOLD,

  },


  referralTop: {

    flexDirection:
      'row',

    justifyContent:
      'space-between',

    alignItems:
      'center',

    paddingTop: 5,

  },


  referralInfo: {

    flexDirection:
      'row',

    alignItems:
      'center',

    flex: 1,

  },


  referralIconBox: {

    width: 40,

    height: 40,

    borderRadius: 12,

    backgroundColor:
      'rgba(252,225,89,0.16)',

    alignItems:
      'center',

    justifyContent:
      'center',

    marginRight: 11,

    borderWidth: 1,

    borderColor:
      'rgba(252,225,89,0.28)',

  },


  referralLabel: {

    color:
      'rgba(255,255,255,0.70)',

    fontSize: 11,

    fontWeight:
      '500',

    letterSpacing:
      0.3,

  },


  referralCode: {

    color:
      '#FFFFFF',

    fontSize: 24,

    fontWeight:
      '900',

    marginTop: 3,

    letterSpacing: 1.4,

  },


  shareButton: {

    flexDirection:
      'row',

    alignItems:
      'center',

    backgroundColor:
      GOLD,

    paddingHorizontal: 13,

    paddingVertical: 10,

    borderRadius: 11,

    gap: 6,

    shadowColor:
      '#000000',

    shadowOpacity: 0.12,

    shadowRadius: 5,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,

  },


  shareText: {

    color:
      DARK_BLUE,

    fontSize: 12,

    fontWeight:
      '800',

  },


  referralDivider: {

    height: 1,

    backgroundColor:
      'rgba(255,255,255,0.15)',

    marginTop: 16,

    marginBottom: 12,

  },


  linkContainer: {

    flexDirection:
      'row',

    alignItems:
      'center',

  },


  linkLabel: {

    color:
      GOLD,

    fontSize: 10,

    fontWeight:
      '700',

    marginRight: 8,

  },


  referralLink: {

    flex: 1,

    color:
      'rgba(255,255,255,0.72)',

    fontSize: 10,

  },


  // ====================================================
  // SECTION HEADING
  // ====================================================

  sectionHeading: {

    flexDirection:
      'row',

    alignItems:
      'center',

    marginBottom: 11,

  },


  sectionHeadingText: {

    color:
      TEXT,

    fontSize: 17,

    fontWeight:
      '800',

  },


  goldDot: {

    width: 7,

    height: 7,

    borderRadius: 4,

    backgroundColor:
      GOLD,

    marginLeft: 8,

  },


  // ====================================================
  // STAT GRID
  // ====================================================

  grid: {

    flexDirection:
      'row',

    flexWrap:
      'wrap',

    gap: 10,

    marginBottom: 12,

  },


  // ====================================================
  // MONTHLY CARDS
  // ====================================================

  twoCards: {

    flexDirection:
      'row',

    gap: 10,

    marginTop: 2,

    marginBottom: 20,

  },


  smallCard: {

    flex: 1,

    backgroundColor:
      WHITE,

    borderWidth: 1,

    borderColor:
      BORDER,

    borderRadius: 16,

    padding: 14,

    shadowColor:
      PRIMARY,

    shadowOpacity: 0.045,

    shadowRadius: 9,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 2,

  },


  smallCardTop: {

    flexDirection:
      'row',

    alignItems:
      'center',

  },


  smallIconBlue: {

    width: 30,

    height: 30,

    borderRadius: 9,

    backgroundColor:
      LIGHT_BLUE,

    alignItems:
      'center',

    justifyContent:
      'center',

    marginRight: 8,

  },


  smallIconGold: {

    width: 30,

    height: 30,

    borderRadius: 9,

    backgroundColor:
      LIGHT_GOLD,

    alignItems:
      'center',

    justifyContent:
      'center',

    marginRight: 8,

  },


  smallLabel: {

    flex: 1,

    fontSize: 11,

    color:
      MUTED,

    fontWeight:
      '600',

  },


  smallValue: {

    marginTop: 9,

    fontSize: 18,

    fontWeight:
      '900',

    color:
      TEXT,

  },


  goldMiniLine: {

    width: 28,

    height: 3,

    borderRadius: 5,

    backgroundColor:
      GOLD,

    marginTop: 9,

  },


  // ====================================================
  // LEVEL HEADER
  // ====================================================

  levelHeader: {

    marginBottom: 2,

  },


  levelWrapper: {

    marginBottom: 8,

  },


  // ====================================================
  // QUICK SECTION
  // ====================================================

  quickSection: {

    marginTop: 12,

    marginBottom: 2,

  },


  quickGrid: {

    flexDirection:
      'row',

    flexWrap:
      'wrap',

    gap: 10,

  },


  // ====================================================
  // QUICK CARD
  // ====================================================

  quickCard: {

    width: '31%',

    minHeight: 96,

    backgroundColor:
      WHITE,

    borderWidth: 1,

    borderColor:
      BORDER,

    borderRadius: 16,

    alignItems:
      'center',

    justifyContent:
      'center',

    paddingHorizontal: 7,

    paddingVertical: 10,

    position: 'relative',

    shadowColor:
      PRIMARY,

    shadowOpacity: 0.05,

    shadowRadius: 9,

    shadowOffset: {
      width: 0,

      height: 4,
    },

    elevation: 2,

  },


  quickIcon: {

    width: 39,

    height: 39,

    borderRadius: 12,

    backgroundColor:
      LIGHT_BLUE,

    borderWidth: 1,

    borderColor:
      'rgba(3,69,189,0.08)',

    alignItems:
      'center',

    justifyContent:
      'center',

    marginBottom: 7,

  },


  quickText: {

    fontSize: 10.5,

    fontWeight:
      '700',

    color:
      TEXT,

    textAlign:
      'center',

    lineHeight: 14,

  },


  quickArrow: {

    position:
      'absolute',

    top: 7,

    right: 7,

  },


  // ====================================================
  // BOTTOM BRAND
  // ====================================================

  bottomBrand: {

    flexDirection:
      'row',

    alignItems:
      'center',

    justifyContent:
      'center',

    marginTop: 30,

    gap: 8,

  },


  brandLine: {

    width: 28,

    height: 2,

    backgroundColor:
      GOLD,

    borderRadius: 5,

  },


  brandText: {

    color:
      PRIMARY,

    fontSize: 9,

    fontWeight:
      '900',

    letterSpacing:
      0.8,

  },

});