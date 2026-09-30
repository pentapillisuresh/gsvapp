import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {
  GitBranch,
  Users,
  ChevronRight,
} from 'lucide-react-native';

import { useRouter } from 'expo-router';

import {
  MLM_TREE,
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

export default function MLMTree() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* HEADER */}

      <View style={styles.headerWrapper}>
        <Header
          title="5-Level Referral Tree"
          subtitle="Your complete referral hierarchy"
          onBack={() => router.back()}
        />
      </View>

      {/* TREE AREA */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontal}
      >

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.treeContent}
        >

          {/* ROOT */}

          <TreeNode
            name={MLM_TREE.name}
            userId={MLM_TREE.userId}
            level={0}
            isRoot
          />

          {/* ROOT CONNECTOR */}

          {MLM_TREE.children?.length > 0 && (
            <View style={styles.rootConnector}>
              <View style={styles.rootVerticalLine} />
            </View>
          )}

          {/* LEVEL 1 */}

          <View style={styles.levelRow}>

            {MLM_TREE.children.map((child) => (
              <View
                key={child.id}
                style={styles.mainBranch}
              >

                {/* CHILD NODE */}

                <TreeNode
                  name={child.name}
                  userId={child.userId}
                  level={child.level}
                />

                {/* CHILDREN */}

                {child.children?.length > 0 && (
                  <>

                    <View style={styles.smallVerticalLine} />

                    <View style={styles.childRow}>

                      {child.children.map((subChild) => (
                        <View
                          key={subChild.id}
                          style={styles.subBranch}
                        >

                          <View style={styles.smallVerticalLine} />

                          <TreeNode
                            name={subChild.name}
                            userId={subChild.userId}
                            level={subChild.level}
                            compact
                          />

                          {/* LEVEL 3+ */}

                          {subChild.children?.length > 0 && (
                            <NestedTree
                              children={subChild.children}
                            />
                          )}

                        </View>
                      ))}

                    </View>

                  </>
                )}

              </View>
            ))}

          </View>

          {/* LEVEL SUMMARY */}

          <LevelSummary />

        </ScrollView>

      </ScrollView>

    </View>
  );
}

/* =========================================================
   NESTED TREE
========================================================= */

function NestedTree({ children }) {
  return (
    <View style={styles.nestedWrapper}>

      <View style={styles.smallVerticalLine} />

      <View style={styles.nestedRow}>

        {children.map((child) => (
          <View
            key={child.id}
            style={styles.nestedBranch}
          >

            <TreeNode
              name={child.name}
              userId={child.userId}
              level={child.level}
              compact
            />

            {child.children?.length > 0 && (
              <NestedTree
                children={child.children}
              />
            )}

          </View>
        ))}

      </View>

    </View>
  );
}

/* =========================================================
   TREE NODE
========================================================= */

function TreeNode({
  name,
  userId,
  level,
  isRoot = false,
  compact = false,
}) {
  return (
    <View
      style={[
        styles.node,
        isRoot && styles.rootNode,
        compact && styles.compactNode,
      ]}
    >

      {/* ICON */}

      <View
        style={[
          styles.nodeIcon,
          isRoot
            ? styles.rootIcon
            : styles.memberIcon,
        ]}
      >

        {isRoot ? (
          <GitBranch
            size={22}
            color={DARK_BLUE}
            strokeWidth={2.2}
          />
        ) : (
          <Users
            size={18}
            color={PRIMARY}
            strokeWidth={2.2}
          />
        )}

      </View>

      {/* NAME */}

      <Text
        numberOfLines={1}
        style={[
          styles.nodeName,
          compact && styles.compactNodeName,
        ]}
      >
        {name}
      </Text>

      {/* USER ID */}

      <Text
        numberOfLines={1}
        style={styles.nodeId}
      >
        ID: {userId}
      </Text>

      {/* LEVEL */}

      <View
        style={[
          styles.nodeLevel,
          isRoot && styles.rootLevel,
        ]}
      >

        <Text
          style={[
            styles.nodeLevelText,
            isRoot && styles.rootLevelText,
          ]}
        >
          {level === 0
            ? 'YOU'
            : `LEVEL ${level}`}
        </Text>

      </View>

    </View>
  );
}

/* =========================================================
   LEVEL SUMMARY
========================================================= */

function LevelSummary() {
  return (
    <View style={styles.summaryCard}>

      {/* TITLE */}

      <View style={styles.summaryHeader}>

        <View>
          <Text style={styles.summaryTitle}>
            Level Summary
          </Text>

          <Text style={styles.summarySubtitle}>
            Your network by referral level
          </Text>
        </View>

        <View style={styles.summaryIcon}>
          <Users
            size={18}
            color={PRIMARY}
            strokeWidth={2.3}
          />
        </View>

      </View>

      {/* LEVELS */}

      <View style={styles.summaryList}>

        {MLM_LEVEL_DATA.map((item, index) => (

          <View
            key={item.level}
            style={[
              styles.summaryRow,
              index === MLM_LEVEL_DATA.length - 1 &&
                styles.lastSummaryRow,
            ]}
          >

            {/* LEFT */}

            <View style={styles.summaryLeft}>

              <View
                style={[
                  styles.levelDot,
                  {
                    backgroundColor:
                      getLevelColor(item.level),
                  },
                ]}
              />

              <View>

                <Text style={styles.levelName}>
                  Level {item.level}
                </Text>

                <Text style={styles.levelMembers}>
                  {item.members} Members
                </Text>

              </View>

            </View>

            {/* INVESTMENT */}

            <View style={styles.investmentBox}>

              <Text style={styles.investmentLabel}>
                Investment
              </Text>

              <Text style={styles.investmentValue}>
                ₹{formatAmount(item.investment)}
              </Text>

            </View>

            {/* PERCENTAGE */}

            <View style={styles.percentBadge}>

              <Text style={styles.percentText}>
                {item.percentage}%
              </Text>

            </View>

          </View>

        ))}

      </View>

    </View>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function formatAmount(amount) {
  return Number(amount || 0).toLocaleString('en-IN');
}

function getLevelColor(level) {
  const colors = [
    PRIMARY,
    '#2459C7',
    '#3D70D8',
    '#5A86E4',
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
     TREE SCROLL
  ======================================================= */

  horizontal: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 50,
    alignItems: 'center',
  },

  treeContent: {
    alignItems: 'center',
    paddingBottom: 30,
  },

  /* =======================================================
     ROOT
  ======================================================= */

  rootConnector: {
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rootVerticalLine: {
    width: 2,
    height: 28,
    backgroundColor: '#B8C6DC',
  },

  /* =======================================================
     LEVEL ROW
  ======================================================= */

  levelRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 22,
  },

  mainBranch: {
    alignItems: 'center',
    position: 'relative',
  },

  /* =======================================================
     CHILDREN
  ======================================================= */

  childRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
  },

  subBranch: {
    alignItems: 'center',
  },

  nestedWrapper: {
    alignItems: 'center',
  },

  nestedRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },

  nestedBranch: {
    alignItems: 'center',
  },

  smallVerticalLine: {
    width: 2,
    height: 18,
    backgroundColor: '#C5D0E0',
  },

  /* =======================================================
     NODE
  ======================================================= */

  node: {
    width: 170,

    minHeight: 148,

    backgroundColor: WHITE,

    borderWidth: 1,

    borderColor: BORDER,

    borderRadius: 16,

    paddingHorizontal: 12,

    paddingVertical: 12,

    alignItems: 'center',

    justifyContent: 'center',

    shadowColor: '#0B1F3A',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.07,

    shadowRadius: 8,

    elevation: 2,
  },

  rootNode: {
    width: 190,

    minHeight: 158,

    borderWidth: 1.5,

    borderColor: GOLD,

    backgroundColor: WHITE,

    shadowColor: PRIMARY,

    shadowOpacity: 0.12,

    shadowRadius: 10,

    elevation: 3,
  },

  compactNode: {
    width: 150,

    minHeight: 135,

    paddingVertical: 10,
  },

  /* =======================================================
     NODE ICON
  ======================================================= */

  nodeIcon: {
    width: 42,

    height: 42,

    borderRadius: 21,

    alignItems: 'center',

    justifyContent: 'center',

    marginBottom: 7,
  },

  rootIcon: {
    backgroundColor: LIGHT_GOLD,

    borderWidth: 1,

    borderColor: 'rgba(252,225,89,0.55)',
  },

  memberIcon: {
    backgroundColor: LIGHT_BLUE,

    borderWidth: 1,

    borderColor: 'rgba(3,69,189,0.10)',
  },

  /* =======================================================
     NODE TEXT
  ======================================================= */

  nodeName: {
    maxWidth: 145,

    fontSize: 13,

    fontWeight: '800',

    color: DARK_BLUE,

    textAlign: 'center',
  },

  compactNodeName: {
    fontSize: 12,

    maxWidth: 125,
  },

  nodeId: {
    maxWidth: 145,

    fontSize: 9.5,

    color: MUTED,

    marginTop: 3,

    textAlign: 'center',
  },

  /* =======================================================
     LEVEL BADGE
  ======================================================= */

  nodeLevel: {
    marginTop: 8,

    paddingHorizontal: 9,

    paddingVertical: 4,

    borderRadius: 7,

    backgroundColor: LIGHT_BLUE,

    borderWidth: 1,

    borderColor: 'rgba(3,69,189,0.10)',
  },

  rootLevel: {
    backgroundColor: LIGHT_GOLD,

    borderColor: 'rgba(252,225,89,0.45)',
  },

  nodeLevelText: {
    fontSize: 8.5,

    fontWeight: '800',

    color: PRIMARY,

    letterSpacing: 0.4,
  },

  rootLevelText: {
    color: DARK_BLUE,
  },

  /* =======================================================
     SUMMARY CARD
  ======================================================= */

  summaryCard: {
    width: 430,

    backgroundColor: WHITE,

    borderRadius: 18,

    borderWidth: 1,

    borderColor: BORDER,

    padding: 18,

    marginTop: 35,

    shadowColor: '#0B1F3A',

    shadowOffset: {
      width: 0,

      height: 4,
    },

    shadowOpacity: 0.06,

    shadowRadius: 10,

    elevation: 2,
  },

  summaryHeader: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingBottom: 14,

    borderBottomWidth: 1,

    borderBottomColor: '#EEF2F7',
  },

  summaryTitle: {
    fontSize: 16,

    fontWeight: '800',

    color: DARK_BLUE,
  },

  summarySubtitle: {
    marginTop: 3,

    fontSize: 10.5,

    color: MUTED,
  },

  summaryIcon: {
    width: 36,

    height: 36,

    borderRadius: 10,

    backgroundColor: LIGHT_BLUE,

    alignItems: 'center',

    justifyContent: 'center',
  },

  /* =======================================================
     SUMMARY ROW
  ======================================================= */

  summaryList: {
    marginTop: 3,
  },

  summaryRow: {
    minHeight: 62,

    flexDirection: 'row',

    alignItems: 'center',

    borderBottomWidth: 1,

    borderBottomColor: '#F0F3F7',
  },

  lastSummaryRow: {
    borderBottomWidth: 0,
  },

  summaryLeft: {
    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',
  },

  levelDot: {
    width: 9,

    height: 9,

    borderRadius: 5,

    marginRight: 9,
  },

  levelName: {
    fontSize: 12,

    fontWeight: '800',

    color: TEXT,
  },

  levelMembers: {
    fontSize: 9.5,

    color: MUTED,

    marginTop: 2,
  },

  /* =======================================================
     INVESTMENT
  ======================================================= */

  investmentBox: {
    width: 110,

    alignItems: 'flex-end',

    marginRight: 12,
  },

  investmentLabel: {
    fontSize: 8.5,

    color: MUTED,

    marginBottom: 2,
  },

  investmentValue: {
    fontSize: 11.5,

    fontWeight: '800',

    color: TEXT,
  },

  /* =======================================================
     PERCENT
  ======================================================= */

  percentBadge: {
    width: 42,

    height: 28,

    borderRadius: 8,

    backgroundColor: LIGHT_GOLD,

    borderWidth: 1,

    borderColor: 'rgba(252,225,89,0.45)',

    alignItems: 'center',

    justifyContent: 'center',
  },

  percentText: {
    fontSize: 10.5,

    fontWeight: '900',

    color: DARK_BLUE,
  },

});