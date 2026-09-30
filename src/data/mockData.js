// ============================================================
// KK FINSURE – Mock Data
// ============================================================

export const INVESTOR = {
  investorId: 'KK10245',
  name: 'Suresh Kumar',
  mobile: '+91 98765 43210',
  email: 'suresh.kumar@email.com',
  dob: '15 Mar 1980',
  gender: 'Male',
  address: {
    house: 'B-204',
    street: 'MG Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
  },
  bank: {
    bankName: 'HDFC Bank',
    accountNumber: '****  ****  4521',
    ifsc: 'HDFC0001234',
    branch: 'Bandra West',
  },
  nominee: {
    name: 'Priya Kumar',
    relationship: 'Spouse',
    mobile: '+91 98765 11111',
  },
  username: 'suresh.kumar', // FIXED: was 'rajesh.kumar'
  tier: 'Premium Investor',
};

export const INVESTMENTS = [
  {
    id: 'INV0001',
    product: 'Falcon Hedge Fund',
    amount: 100000,
    roi: 4,
    monthlyROI: 4000,
    investmentDate: '01 Jan 2026',
    maturityDate: '01 Jan 2028',
    status: 'Active',
    agreementUrl: null,
    certificateUrl: null,
  },
  {
    id: 'INV0002',
    product: 'Falcon Hedge Fund',
    amount: 300000,
    roi: 3,
    monthlyROI: 9000,
    investmentDate: '01 Mar 2026',
    maturityDate: '01 Mar 2028',
    status: 'Active',
    agreementUrl: null,
    certificateUrl: null,
  },
];

export const PORTFOLIO_SUMMARY = {
  totalInvestment: 400000,
  monthlyROI: 13000,
  receivedROI: 30000,
  pendingROI: 13000,
  totalProducts: 1,
  maturityDate: '01 Jan 2028',
};

export const ROI_HISTORY = [
  { month: 'Jan 2026', investment: 100000, roi: 4000, status: 'Paid' },
  { month: 'Feb 2026', investment: 100000, roi: 4000, status: 'Paid' },
  { month: 'Mar 2026', investment: 400000, roi: 13000, status: 'Paid' },
  { month: 'Apr 2026', investment: 400000, roi: 13000, status: 'Pending' },
  { month: 'May 2026', investment: 400000, roi: 13000, status: 'Pending' },
];

export const ROI_BAR_DATA = [
  { month: 'Jan', amount: 4000 },
  { month: 'Feb', amount: 4000 },
  { month: 'Mar', amount: 13000 },
  { month: 'Apr', amount: 13000 },
  { month: 'May', amount: 13000 },
];

export const GROWTH_DATA = [
  { month: 'Jan', amount: 100000 },
  { month: 'Feb', amount: 100000 },
  { month: 'Mar', amount: 400000 },
  { month: 'Apr', amount: 400000 },
  { month: 'May', amount: 400000 },
  { month: 'Jun', amount: 400000 },
  { month: 'Jul', amount: 450000 },
  { month: 'Aug', amount: 500000 },
  { month: 'Sep', amount: 550000 },
  { month: 'Oct', amount: 600000 },
  { month: 'Nov', amount: 650000 },
  { month: 'Dec', amount: 700000 },
];

export const QUARTERLY_PERFORMANCE = [
  { quarter: 'Q1', performance: 8 },
  { quarter: 'Q2', performance: 10 },
  { quarter: 'Q3', performance: 9 },
  { quarter: 'Q4', performance: 11 },
];

export const DOCUMENTS = {
  kyc: [
    { name: 'PAN Card', date: '01 Jan 2026', type: 'KYC' },
    { name: 'Aadhaar Card', date: '01 Jan 2026', type: 'KYC' },
    { name: 'Passport Photo', date: '01 Jan 2026', type: 'KYC' },
    { name: 'Signature', date: '01 Jan 2026', type: 'KYC' },
  ],
  investment: [
    { name: 'Investment Agreement (INV0001)', date: '01 Jan 2026', type: 'Agreement' },
    { name: 'Investment Certificate (INV0001)', date: '01 Jan 2026', type: 'Certificate' },
    { name: 'Investment Agreement (INV0002)', date: '01 Mar 2026', type: 'Agreement' },
    { name: 'Investment Certificate (INV0002)', date: '01 Mar 2026', type: 'Certificate' },
  ],
  statements: [
    { name: 'Monthly Statement – Mar 2026', date: '01 Apr 2026', type: 'Statement' },
    { name: 'Quarterly Report Q1 2026', date: '15 Apr 2026', type: 'Report' },
    { name: 'Annual Statement 2025', date: '01 Jan 2026', type: 'Annual' },
  ],
  company: [
    { name: 'SEBI Registration', date: '01 Jan 2025', type: 'Compliance' },
    { name: 'PMS Certificate', date: '01 Jan 2025', type: 'Compliance' },
    { name: 'AIF Certificate', date: '01 Jan 2025', type: 'Compliance' },
    { name: 'NSE Membership', date: '01 Jan 2025', type: 'Compliance' },
    { name: 'BSE Membership', date: '01 Jan 2025', type: 'Compliance' },
  ],
};

export const OFFERS = [
  {
    id: '1',
    title: 'Festival Cashback',
    description:
      'Get 2% cashback on your next top-up investment above ₹1 Lakh during the festive season.',
    expiry: 'Valid till 31 Aug 2026',
    tag: 'CASHBACK',
    eligible: true,
  },
  {
    id: '2',
    title: 'Gift Voucher',
    description:
      'Receive a ₹5,000 Amazon gift voucher on completing 6 months of continuous investment.',
    expiry: 'Valid till 30 Jul 2026',
    tag: 'GIFT',
    eligible: true,
  },
  {
    id: '3',
    title: 'Special Cashback',
    description: 'Exclusive 1.5% bonus ROI for quarterly reinvestment of matured funds.',
    expiry: 'Valid till 15 Aug 2026',
    tag: 'BONUS ROI',
    eligible: false,
  },
  {
    id: '4',
    title: 'Monthly Login Rewards',
    description: 'Login daily for 30 days to earn 500 reward points redeemable as cashback.',
    expiry: 'Ongoing',
    tag: 'REWARDS',
    eligible: true,
  },
];

export const NOTIFICATIONS = [
  {
    id: '1',
    title: 'ROI Credited',
    description: '₹13,000 Monthly ROI for Mar 2026 has been credited to your account.',
    datetime: '01 Apr 2026, 10:00 AM',
    read: false,
    type: 'roi',
  },
  {
    id: '2',
    title: 'New Investment Added',
    description: 'Your investment of ₹3,00,000 in Falcon Hedge Fund has been activated (INV0002).',
    datetime: '01 Mar 2026, 09:30 AM',
    read: false,
    type: 'investment',
  },
  {
    id: '3',
    title: 'Quarterly Report Available',
    description: 'Q1 2026 Quarterly Performance Report is now available in Documents.',
    datetime: '15 Apr 2026, 11:00 AM',
    read: true,
    type: 'document',
  },
  {
    id: '4',
    title: 'New Offer',
    description:
      'Festival Cashback Offer – Get 2% cashback on top-up investments. Valid till 31 Aug 2026.',
    datetime: '10 Apr 2026, 08:00 AM',
    read: true,
    type: 'offer',
  },
  {
    id: '5',
    title: 'Maturity Reminder',
    description:
      'Your investment INV0001 (₹1,00,000) matures on 01 Jan 2028. Plan your reinvestment.',
    datetime: '17 Jul 2026, 09:00 AM',
    read: false,
    type: 'maturity',
  },
];

// ============================================================
// GSV COMPANY - MLM MOCK DATA
// ============================================================

export const MLM_COMMISSION_LEVELS = [
  { level: 1, name: 'Level 1', percentage: 5, color: '#7CB80B' },
  { level: 2, name: 'Level 2', percentage: 4, color: '#2B46D5' },
  { level: 3, name: 'Level 3', percentage: 3, color: '#9B59B6' },
  { level: 4, name: 'Level 4', percentage: 2, color: '#E67E22' },
  { level: 5, name: 'Level 5', percentage: 1, color: '#16A085' },
];

// ============================================================
// DIRECT MEMBERS (Level 1) — sponsor is always the root user
// ============================================================

export const DIRECT_MEMBERS = [
  {
    id: 'USR001',
    name: 'Amit Verma',
    username: 'amit.verma',
    mobile: '+91 98765 11111',
    investment: 100000,
    joinedDate: '10 Jan 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
  {
    id: 'USR002',
    name: 'Neha Patel',
    username: 'neha.patel',
    mobile: '+91 98765 22222',
    investment: 200000,
    joinedDate: '18 Jan 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
  {
    id: 'USR003',
    name: 'Vikram Singh',
    username: 'vikram.singh',
    mobile: '+91 98765 33333',
    investment: 50000,
    joinedDate: '25 Jan 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
  {
    id: 'USR004',
    name: 'Pooja Mehta',
    username: 'pooja.mehta',
    mobile: '+91 98765 44444',
    investment: 150000,
    joinedDate: '05 Feb 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
  {
    id: 'USR005',
    name: 'Ravi Kumar',
    username: 'ravi.kumar',
    mobile: '+91 98765 55555',
    investment: 100000,
    joinedDate: '12 Feb 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
  {
    id: 'USR006',
    name: 'Sneha Reddy',
    username: 'sneha.reddy',
    mobile: '+91 98765 66666',
    investment: 300000,
    joinedDate: '18 Feb 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
  {
    id: 'USR007',
    name: 'Manoj Gupta',
    username: 'manoj.gupta',
    mobile: '+91 98765 77777',
    investment: 250000,
    joinedDate: '25 Feb 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
  {
    id: 'USR008',
    name: 'Anjali Rao',
    username: 'anjali.rao',
    mobile: '+91 98765 88888',
    investment: 100000,
    joinedDate: '03 Mar 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
  {
    id: 'USR009',
    name: 'Karan Shah',
    username: 'karan.shah',
    mobile: '+91 98765 99999',
    investment: 200000,
    joinedDate: '10 Mar 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
  {
    id: 'USR010',
    name: 'Divya Nair',
    username: 'divya.nair',
    mobile: '+91 98765 12121',
    investment: 100000,
    joinedDate: '18 Mar 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
  {
    id: 'USR011',
    name: 'Arjun Das',
    username: 'arjun.das',
    mobile: '+91 98765 13131',
    investment: 50000,
    joinedDate: '25 Mar 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
  {
    id: 'USR012',
    name: 'Meena Joshi',
    username: 'meena.joshi',
    mobile: '+91 98765 14141',
    investment: 200000,
    joinedDate: '02 Apr 2026',
    status: 'Active',
    level: 1,
    sponsor: 'Suresh Kumar',
    sponsorId: 'KK10245',
  },
];

// ============================================================
// ALL LEVEL MEMBERS
// ============================================================

export const MLM_MEMBERS = [
  ...DIRECT_MEMBERS,

  // -------- Level 2 --------
  {
    id: 'USR013',
    name: 'Rahul Sharma',
    username: 'rahul.sharma',
    mobile: '+91 98765 15151',
    investment: 100000,
    joinedDate: '12 Apr 2026',
    status: 'Active',
    level: 2,
    sponsor: 'Amit Verma',
    sponsorId: 'USR001',
  },
  {
    id: 'USR014',
    name: 'Vijay Kumar',
    username: 'vijay.kumar',
    mobile: '+91 98765 16161',
    investment: 200000,
    joinedDate: '15 Apr 2026',
    status: 'Active',
    level: 2,
    sponsor: 'Amit Verma',
    sponsorId: 'USR001',
  },
  {
    id: 'USR015',
    name: 'Kiran Rao',
    username: 'kiran.rao',
    mobile: '+91 98765 17171',
    investment: 100000,
    joinedDate: '20 Apr 2026',
    status: 'Active',
    level: 2,
    sponsor: 'Neha Patel',
    sponsorId: 'USR002',
  },
  {
    id: 'USR016',
    name: 'Arun Kumar',
    username: 'arun.kumar',
    mobile: '+91 98765 18181',
    investment: 150000,
    joinedDate: '22 Apr 2026',
    status: 'Active',
    level: 2,
    sponsor: 'Neha Patel',
    sponsorId: 'USR002',
  },

  // -------- Level 3 --------
  {
    id: 'USR017',
    name: 'Sanjay Rao',
    username: 'sanjay.rao',
    mobile: '+91 98765 19191',
    investment: 100000,
    joinedDate: '25 Apr 2026',
    status: 'Active',
    level: 3,
    sponsor: 'Rahul Sharma',
    sponsorId: 'USR013',
  },
  {
    id: 'USR018',
    name: 'Priya Singh',
    username: 'priya.singh',
    mobile: '+91 98765 20202',
    investment: 200000,
    joinedDate: '27 Apr 2026',
    status: 'Active',
    level: 3,
    sponsor: 'Vijay Kumar',
    sponsorId: 'USR014',
  },

  // -------- Level 4 --------
  {
    id: 'USR019',
    name: 'Karthik Reddy',
    username: 'karthik.reddy',
    mobile: '+91 98765 21212',
    investment: 150000,
    joinedDate: '01 May 2026',
    status: 'Active',
    level: 4,
    sponsor: 'Sanjay Rao',
    sponsorId: 'USR017',
  },

  // -------- Level 5 --------
  {
    id: 'USR020',
    name: 'Suresh Rao',
    username: 'suresh.rao',
    mobile: '+91 98765 22222',
    investment: 100000,
    joinedDate: '05 May 2026',
    status: 'Active',
    level: 5,
    sponsor: 'Karthik Reddy',
    sponsorId: 'USR019',
  },
];

// ============================================================
// MLM INCOME HISTORY
// Levels are now correctly assigned based on the referral tree.
// Commission = investmentAmount * (percentage / 100)
// ============================================================

export const MLM_INCOME_HISTORY = [
  {
    id: 'MLM001',
    date: '28 Sep 2026',
    fromUser: 'Amit Verma',
    fromUserId: 'USR001',
    investmentAmount: 100000,
    level: 1,
    percentage: 5,
    commission: 5000,
    status: 'Paid',
  },
  {
    id: 'MLM002',
    date: '25 Sep 2026',
    fromUser: 'Rahul Sharma',
    fromUserId: 'USR013',
    investmentAmount: 100000,
    level: 2,
    percentage: 4,
    commission: 4000,
    status: 'Paid',
  },
  {
    id: 'MLM003',
    date: '20 Sep 2026',
    fromUser: 'Sanjay Rao',
    fromUserId: 'USR017',
    investmentAmount: 100000,
    level: 3,
    percentage: 3,
    commission: 3000,
    status: 'Paid',
  },
  {
    id: 'MLM004',
    date: '15 Sep 2026',
    fromUser: 'Karthik Reddy',
    fromUserId: 'USR019',
    investmentAmount: 100000,
    level: 4,
    percentage: 2,
    commission: 2000,
    status: 'Pending',
  },
  {
    id: 'MLM005',
    date: '10 Sep 2026',
    fromUser: 'Suresh Rao',
    fromUserId: 'USR020',
    investmentAmount: 50000,
    level: 5,
    percentage: 1,
    commission: 500,
    status: 'Paid',
  },
];

// ============================================================
// MLM SUMMARY
// Total MLM income derived from MLM_INCOME_HISTORY = 8500
// (5000 Paid + 4000 Paid + 3000 Paid + 2000 Pending + 500 Paid)
// Paid   = 5000 + 4000 + 3000 + 500 = 12500? -> adjusted below
// ============================================================

const totalMLMIncome = MLM_INCOME_HISTORY.reduce((sum, i) => sum + i.commission, 0);
const paidIncome = MLM_INCOME_HISTORY
  .filter((i) => i.status === 'Paid')
  .reduce((sum, i) => sum + i.commission, 0);
const pendingIncome = MLM_INCOME_HISTORY
  .filter((i) => i.status === 'Pending')
  .reduce((sum, i) => sum + i.commission, 0);

export const MLM_SUMMARY = {
  referralCode: 'GSV10245',
  referralLink: 'https://gsv.com/ref/gsv10245',

  directMembers: DIRECT_MEMBERS.length, // 12

  level1Members: 12,
  level2Members: 18,
  level3Members: 10,
  level4Members: 6,
  level5Members: 2,

  totalTeam: 48,

  totalTeamInvestment: 4800000,

  totalMLMIncome: totalMLMIncome,   // 14500
  thisMonthIncome: 3000,

  pendingIncome: pendingIncome,     // 2000
  paidIncome: paidIncome,           // 12500
};

// ============================================================
// LEVEL-WISE DATA
// Income = investment * (percentage / 100) per level
// ============================================================

export const MLM_LEVEL_DATA = [
  {
    level: 1,
    percentage: 5,
    members: 12,
    investment: 1200000,
    income: 60000, // 1200000 * 5%
  },
  {
    level: 2,
    percentage: 4,
    members: 18,
    investment: 1800000,
    income: 72000, // 1800000 * 4%
  },
  {
    level: 3,
    percentage: 3,
    members: 10,
    investment: 1000000,
    income: 30000, // 1000000 * 3%
  },
  {
    level: 4,
    percentage: 2,
    members: 6,
    investment: 600000,
    income: 12000, // 600000 * 2%
  },
  {
    level: 5,
    percentage: 1,
    members: 2,
    investment: 200000,
    income: 2000, // 200000 * 1%
  },
];

// ============================================================
// REFERRAL TREE
// ============================================================

export const MLM_TREE = {
  id: 'ROOT',
  name: 'Suresh Kumar',
  userId: 'KK10245',
  level: 0,
  children: [
    {
      id: 'USR001',
      name: 'Amit Verma',
      userId: 'KK10246',
      level: 1,
      children: [
        {
          id: 'USR013',
          name: 'Rahul Sharma',
          userId: 'KK10258',
          level: 2,
          children: [
            {
              id: 'USR017',
              name: 'Sanjay Rao',
              userId: 'KK10262',
              level: 3,
              children: [
                {
                  id: 'USR019',
                  name: 'Karthik Reddy',
                  userId: 'KK10270',
                  level: 4,
                  children: [
                    {
                      id: 'USR020',
                      name: 'Suresh Rao',
                      userId: 'KK10271',
                      level: 5,
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'USR014',
          name: 'Vijay Kumar',
          userId: 'KK10259',
          level: 2,
          children: [],
        },
      ],
    },
    {
      id: 'USR002',
      name: 'Neha Patel',
      userId: 'KK10247',
      level: 1,
      children: [
        {
          id: 'USR015',
          name: 'Kiran Rao',
          userId: 'KK10260',
          level: 2,
          children: [],
        },
        {
          id: 'USR016',
          name: 'Arun Kumar',
          userId: 'KK10261',
          level: 2,
          children: [],
        },
      ],
    },
    {
      id: 'USR003',
      name: 'Vikram Singh',
      userId: 'KK10248',
      level: 1,
      children: [],
    },
    {
      id: 'USR004',
      name: 'Pooja Mehta',
      userId: 'KK10249',
      level: 1,
      children: [],
    },
    {
      id: 'USR005',
      name: 'Ravi Kumar',
      userId: 'KK10250',
      level: 1,
      children: [],
    },
    {
      id: 'USR006',
      name: 'Sneha Reddy',
      userId: 'KK10251',
      level: 1,
      children: [],
    },
    {
      id: 'USR007',
      name: 'Manoj Gupta',
      userId: 'KK10252',
      level: 1,
      children: [],
    },
    {
      id: 'USR008',
      name: 'Anjali Rao',
      userId: 'KK10253',
      level: 1,
      children: [],
    },
    {
      id: 'USR009',
      name: 'Karan Shah',
      userId: 'KK10254',
      level: 1,
      children: [],
    },
    {
      id: 'USR010',
      name: 'Divya Nair',
      userId: 'KK10255',
      level: 1,
      children: [],
    },
    {
      id: 'USR011',
      name: 'Arjun Das',
      userId: 'KK10256',
      level: 1,
      children: [],
    },
    {
      id: 'USR012',
      name: 'Meena Joshi',
      userId: 'KK10257',
      level: 1,
      children: [],
    },
  ],
};

// ============================================================
// TEAM REPORT
// ============================================================

export const MLM_TEAM_REPORT = {
  totalTeam: 48,
  activeMembers: 42,
  inactiveMembers: 6,
  totalInvestment: 4800000,

  levels: MLM_LEVEL_DATA.map((l) => ({
    level: l.level,
    members: l.members,
    investment: l.investment,
    income: l.income,
  })),
};

// ============================================================
// REFERRAL
// Points are based on 1% of each member's investment.
// ============================================================

export const REFERRAL = {
  referralId: 'gsv10245',
  referralLink: 'https://gsv.com/ref/gsv10245',

  totalReferrals: DIRECT_MEMBERS.length, // 12
  successfulInvestments: DIRECT_MEMBERS.filter((m) => m.investment > 0).length, // 12

  referralPoints: DIRECT_MEMBERS.reduce(
    (sum, m) => sum + Math.round(m.investment * 0.01),
    0
  ),
  referralEarnings: MLM_SUMMARY.paidIncome,

  history: DIRECT_MEMBERS.map((member) => ({
    name: member.name,
    amount: member.investment,
    date: member.joinedDate,
    points: Math.round(member.investment * 0.01),
    status: member.investment > 0 ? 'Converted' : 'Invited',
  })),
};