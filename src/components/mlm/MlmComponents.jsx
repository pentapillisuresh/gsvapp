import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  ChevronRight,
  Users,
  IndianRupee,
  TrendingUp,
} from 'lucide-react-native';

export const COLORS = {
  background: '#F7F8FA',
  white: '#FFFFFF',

  primary: '#7CB80B',
  primaryLight: 'rgba(124,184,11,0.08)',

  blue: '#2B46D5',

  text: '#1A2332',
  muted: '#6B7A8F',

  border: '#E8ECF0',

  success: '#199B5A',
  danger: '#D64545',
  warning: '#D88B00',
};

export function Header({
  title,
  subtitle,
  onBack,
}) {
  return (
    <View style={styles.header}>

      {onBack && (
        <TouchableOpacity
          onPress={onBack}
          style={styles.backButton}
        >
          <Text style={styles.backText}>
            ‹
          </Text>
        </TouchableOpacity>
      )}

      <View>
        <Text style={styles.headerTitle}>
          {title}
        </Text>

        {subtitle && (
          <Text style={styles.headerSubtitle}>
            {subtitle}
          </Text>
        )}
      </View>

    </View>
  );
}

export function StatCard({
  title,
  value,
  icon: Icon,
  color = COLORS.primary,
}) {
  return (
    <View style={styles.statCard}>

      <View
        style={[
          styles.statIcon,
          {
            backgroundColor:
              `${color}12`,
          },
        ]}
      >
        <Icon
          size={20}
          color={color}
        />
      </View>

      <Text style={styles.statTitle}>
        {title}
      </Text>

      <Text style={styles.statValue}>
        {value}
      </Text>

    </View>
  );
}

export function SectionTitle({
  title,
  action,
  onPress,
}) {
  return (
    <View style={styles.sectionHeader}>

      <Text style={styles.sectionTitle}>
        {title}
      </Text>

      {action && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.action}>
            {action}
          </Text>
        </TouchableOpacity>
      )}

    </View>
  );
}

export function LevelCard({
  level,
  percentage,
  members,
  investment,
  income,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.levelCard}
      onPress={onPress}
      activeOpacity={0.8}
    >

      <View
        style={[
          styles.levelCircle,
          {
            backgroundColor:
              level === 1
                ? '#7CB80B'
                : level === 2
                ? '#2B46D5'
                : level === 3
                ? '#9B59B6'
                : level === 4
                ? '#E67E22'
                : '#16A085',
          },
        ]}
      >
        <Text style={styles.levelNumber}>
          {level}
        </Text>
      </View>

      <View style={styles.levelContent}>

        <View style={styles.levelTop}>

          <Text style={styles.levelTitle}>
            Level {level}
          </Text>

          <View style={styles.percentBadge}>
            <Text style={styles.percentText}>
              {percentage}%
            </Text>
          </View>

        </View>

        <View style={styles.levelStats}>

          <Text style={styles.levelStat}>
            {members} Members
          </Text>

          <Text style={styles.levelStat}>
            ₹{investment.toLocaleString('en-IN')}
          </Text>

        </View>

      </View>

      <View style={styles.levelIncome}>

        <Text style={styles.incomeSmall}>
          Income
        </Text>

        <Text style={styles.incomeValue}>
          ₹{income.toLocaleString('en-IN')}
        </Text>

      </View>

      <ChevronRight
        size={19}
        color={COLORS.muted}
      />

    </TouchableOpacity>
  );
}

export function MemberCard({
  member,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.memberCard}
      onPress={onPress}
      activeOpacity={0.8}
    >

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {member.name.charAt(0)}
        </Text>
      </View>

      <View style={styles.memberInfo}>

        <Text style={styles.memberName}>
          {member.name}
        </Text>

        <Text style={styles.memberId}>
          {member.username}
        </Text>

        <Text style={styles.memberInvestment}>
          Investment: ₹
          {Number(member.investment || 0)
            .toLocaleString('en-IN')}
        </Text>

      </View>

      <View style={styles.memberRight}>

        <View style={styles.activeBadge}>
          <Text style={styles.activeText}>
            {member.status}
          </Text>
        </View>

        <Text style={styles.joinedText}>
          {member.joinedDate}
        </Text>

      </View>

      <ChevronRight
        size={18}
        color={COLORS.muted}
      />

    </TouchableOpacity>
  );
}

export function EmptyState({
  title,
  description,
}) {
  return (
    <View style={styles.empty}>

      <Users
        size={42}
        color={COLORS.muted}
      />

      <Text style={styles.emptyTitle}>
        {title}
      </Text>

      <Text style={styles.emptyDescription}>
        {description}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 14,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F5F6F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  backText: {
    fontSize: 28,
    color: COLORS.text,
    lineHeight: 30,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },

  headerSubtitle: {
    marginTop: 2,
    fontSize: 12,
    color: COLORS.muted,
  },

  statCard: {
    flex: 1,
    minWidth: '47%',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 15,
    marginBottom: 10,
  },

  statIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  statTitle: {
    fontSize: 12,
    color: COLORS.muted,
  },

  statValue: {
    marginTop: 5,
    fontSize: 19,
    fontWeight: '700',
    color: COLORS.text,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.text,
  },

  action: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '700',
  },

  levelCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 15,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  levelCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },

  levelNumber: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  levelContent: {
    flex: 1,
  },

  levelTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  levelTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
  },

  percentBadge: {
    marginLeft: 7,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 8,
    backgroundColor: COLORS.primaryLight,
  },

  percentText: {
    color: COLORS.primary,
    fontSize: 11,
    fontWeight: '700',
  },

  levelStats: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 10,
  },

  levelStat: {
    color: COLORS.muted,
    fontSize: 11,
  },

  levelIncome: {
    alignItems: 'flex-end',
    marginRight: 8,
  },

  incomeSmall: {
    fontSize: 10,
    color: COLORS.muted,
  },

  incomeValue: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 2,
  },

  memberCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 15,
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 17,
    fontWeight: '800',
    color: COLORS.primary,
  },

  memberInfo: {
    flex: 1,
    marginLeft: 11,
  },

  memberName: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
  },

  memberId: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 2,
  },

  memberInvestment: {
    fontSize: 11,
    color: COLORS.text,
    marginTop: 4,
  },

  memberRight: {
    alignItems: 'flex-end',
    marginRight: 7,
  },

  activeBadge: {
    backgroundColor: '#E9F8F0',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 7,
  },

  activeText: {
    fontSize: 9,
    fontWeight: '700',
    color: COLORS.success,
  },

  joinedText: {
    fontSize: 9,
    color: COLORS.muted,
    marginTop: 5,
  },

  empty: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    padding: 35,
    alignItems: 'center',
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 10,
  },

  emptyDescription: {
    fontSize: 12,
    color: COLORS.muted,
    textAlign: 'center',
    marginTop: 5,
  },

});