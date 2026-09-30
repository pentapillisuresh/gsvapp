import React from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  User,
  Wallet,
  Users,
  TrendingUp,
  Calendar,
} from 'lucide-react-native';

import { useRouter } from 'expo-router';

import {
  DIRECT_MEMBERS,
} from '../../data/mockData';

import {
  Header,
  COLORS,
} from '../../components/mlm/MlmComponents';

export default function MLMMember() {

  const router = useRouter();

  const member = DIRECT_MEMBERS[0];

  return (
    <View style={styles.container}>

      <Header
        title="Member Details"
        subtitle="Referral member information"
        onBack={() => router.back()}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.profile}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {member.name.charAt(0)}
            </Text>
          </View>

          <Text style={styles.name}>
            {member.name}
          </Text>

          <Text style={styles.username}>
            {member.username}
          </Text>

          <View style={styles.active}>
            <Text style={styles.activeText}>
              {member.status}
            </Text>
          </View>

        </View>

        <View style={styles.grid}>

          <InfoCard
            icon={User}
            title="Referral Level"
            value="Level 1"
          />

          <InfoCard
            icon={Wallet}
            title="Investment"
            value={`₹${member.investment.toLocaleString('en-IN')}`}
          />

          <InfoCard
            icon={Users}
            title="Direct Members"
            value="3"
          />

          <InfoCard
            icon={TrendingUp}
            title="Commission Earned"
            value="₹5,000"
          />

        </View>

        <View style={styles.card}>

          <Row
            label="User ID"
            value={member.id}
          />

          <Row
            label="Mobile"
            value={member.mobile || '+91 98765 11111'}
          />

          <Row
            label="Joined Date"
            value={member.joinedDate}
          />

          <Row
            label="Sponsor"
            value="Suresh Kumar"
          />

          <Row
            label="Status"
            value={member.status}
          />

        </View>

      </ScrollView>

    </View>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value,
}) {
  return (
    <View style={styles.infoCard}>

      <Icon
        size={19}
        color={COLORS.primary}
      />

      <Text style={styles.infoTitle}>
        {title}
      </Text>

      <Text style={styles.infoValue}>
        {value}
      </Text>

    </View>
  );
}

function Row({
  label,
  value,
}) {
  return (
    <View style={styles.row}>

      <Text style={styles.rowLabel}>
        {label}
      </Text>

      <Text style={styles.rowValue}>
        {value}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },

  content: {
    padding: 16,
    paddingBottom: 40,
  },

  profile: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#E8ECF0',
    alignItems: 'center',
    padding: 22,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(124,184,11,0.10)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: '#7CB80B',
    fontSize: 28,
    fontWeight: '800',
  },

  name: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A2332',
    marginTop: 10,
  },

  username: {
    color: '#6B7A8F',
    fontSize: 12,
    marginTop: 3,
  },

  active: {
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: '#E9F8F0',
  },

  activeText: {
    color: '#199B5A',
    fontSize: 10,
    fontWeight: '800',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },

  infoCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8ECF0',
    borderRadius: 14,
    padding: 14,
  },

  infoTitle: {
    fontSize: 10,
    color: '#6B7A8F',
    marginTop: 9,
  },

  infoValue: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1A2332',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8ECF0',
    paddingHorizontal: 15,
    marginTop: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF1F4',
  },

  rowLabel: {
    fontSize: 12,
    color: '#6B7A8F',
  },

  rowValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1A2332',
    maxWidth: '60%',
    textAlign: 'right',
  },

});