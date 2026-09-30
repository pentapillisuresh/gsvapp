import { useState } from 'react';

import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import {
  Drawer,
} from 'expo-router/drawer';

import {
  usePathname,
  useRouter,
} from 'expo-router';

import {
  Banknote,
  BarChart3,
  ChevronDown,
  ChevronUp,
  FileText,
  Gift,
  GitBranch,
  HeadphonesIcon,
  History,
  LayoutDashboard,
  LogOut,
  Network,
  Percent,
  Ticket,
  User,
  Users,
  UsersRound,
  Wallet,
} from 'lucide-react-native';

import {
  Alert,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import {
  removeIsLogin,
  removeToken,
  removeUser,
} from '../../utils/storage';


// ======================================================
// COLORS
// ======================================================

// Main brand colors
const PRIMARY = '#0345BD';
const GOLD = '#FCE159';

// Backgrounds
const BG = '#FFFFFF';
const DRAWER_BG = '#FFFFFF';
const CARD_BG = '#F8FAFD';
const INPUT_BG = '#FFFFFF';

// Text
const TEXT = '#102A56';
const MUTED = '#64748B';

// Borders
const BORDER = '#E1E8F2';

// Premium blue backgrounds
const LIGHT_BLUE = 'rgba(3, 69, 189, 0.07)';
const BLUE_BORDER = 'rgba(3, 69, 189, 0.18)';

// Gold backgrounds
const LIGHT_GOLD = 'rgba(252, 225, 89, 0.18)';
const GOLD_BORDER = 'rgba(252, 225, 89, 0.55)';


const { width } = Dimensions.get('window');


// ======================================================
// CUSTOM DRAWER
// ======================================================

function CustomDrawerContent(props) {

  const insets = useSafeAreaInsets();

  const router = useRouter();

  const pathname = usePathname();


  // ====================================================
  // MLM DROPDOWN STATE
  // ====================================================

  const [mlmOpen, setMlmOpen] = useState(false);


  // ====================================================
  // MLM ROUTES
  // ====================================================

  const mlmPaths = [
    '/mlm',
    '/mlm-code',
    '/mlm-network',
    '/mlm-tree',
    '/mlm-commission',
    '/mlm-income',
    '/mlm-history',
    '/mlm-team',
  ];


  // ====================================================
  // CHECK MLM ACTIVE
  // ====================================================

  const isMlmActive = mlmPaths.some((path) =>
    pathname?.startsWith(path)
  );


  // ====================================================
  // MAIN MENU
  // ====================================================

  const menuItems = [

    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/home',
    },

    {
      label: 'Investments',
      icon: Wallet,
      path: '/investments',
    },

    {
      label: 'Monthly ROI',
      icon: BarChart3,
      path: '/roi',
    },

    {
      label: 'Documents',
      icon: FileText,
      path: '/documents',
    },

    {
      label: 'Offers',
      icon: Gift,
      path: '/offers',
    },

  ];


  // ====================================================
  // MLM MENU
  // ====================================================

  const mlmItems = [

    {
      label: 'MLM Dashboard',
      icon: Network,
      path: '/mlm',
    },

    {
      label: 'My Referral Code',
      icon: Users,
      path: '/mlm-code',
    },

    {
      label: 'Referral Network',
      icon: UsersRound,
      path: '/mlm-network',
    },

    {
      label: '5-Level Referral Tree',
      icon: GitBranch,
      path: '/mlm-tree',
    },

    {
      label: 'Commission Structure',
      icon: Percent,
      path: '/mlm-commission',
    },

    {
      label: 'MLM Income',
      icon: Banknote,
      path: '/mlm-income',
    },

    {
      label: 'Income History',
      icon: History,
      path: '/mlm-history',
    },

    {
      label: 'Team Reports',
      icon: BarChart3,
      path: '/mlm-team',
    },

  ];


  // ====================================================
  // OTHER MENU
  // ====================================================

  const bottomMenuItems = [

    {
      label: 'Balance Sheet',
      icon: Wallet,
      path: '/balanceSheet',
    },

    {
      label: 'Tickets',
      icon: Ticket,
      path: '/tickets',
    },

    {
      label: 'Profile',
      icon: User,
      path: '/profile',
    },

    {
      label: 'Support',
      icon: HeadphonesIcon,
      path: '/support',
    },

  ];


  // ====================================================
  // LOGOUT
  // ====================================================

  const handleLogout = () => {

    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',

      [
        {
          text: 'Cancel',
          style: 'cancel',
        },

        {
          text: 'Logout',
          style: 'destructive',

          onPress: () => {

            removeToken();

            removeUser();

            removeIsLogin();

            router.replace('/login');

          },
        },
      ],
    );
  };


  // ====================================================
  // DRAWER ITEM
  // ====================================================

  const renderDrawerItem = (item, index) => {

    const Icon = item.icon;

    const isActive =
      pathname === item.path ||
      pathname?.startsWith(`${item.path}/`);


    return (

      <DrawerItem

        key={
          item.path || index
        }

        label={item.label}


        labelStyle={{
          color: isActive
            ? PRIMARY
            : TEXT,

          fontSize: 14,

          marginLeft: -8,

          fontWeight: isActive
            ? '700'
            : '500',

          letterSpacing: 0.2,
        }}


        icon={() => (

          <View
            style={{
              width: 34,

              height: 34,

              borderRadius: 10,

              alignItems: 'center',

              justifyContent: 'center',

              backgroundColor:
                isActive
                  ? LIGHT_BLUE
                  : 'transparent',
            }}
          >

            <Icon
              size={20}

              color={
                isActive
                  ? PRIMARY
                  : MUTED
              }
            />

          </View>

        )}


        onPress={() => {

          router.push(
            item.path
          );

        }}


        style={{

          marginVertical: 2,

          borderRadius: 13,

          paddingHorizontal: 4,

          backgroundColor:
            isActive
              ? LIGHT_BLUE
              : 'transparent',

          borderWidth:
            isActive
              ? 1
              : 0,

          borderColor:
            isActive
              ? BLUE_BORDER
              : 'transparent',
        }}


        activeTintColor={
          PRIMARY
        }

        activeBackgroundColor={
          LIGHT_BLUE
        }

      />

    );
  };


  // ====================================================
  // MLM SUB MENU ITEM
  // ====================================================

  const renderMlmItem = (item) => {

    const Icon = item.icon;

    const isActive =
      pathname === item.path ||
      pathname?.startsWith(`${item.path}/`);


    return (

      <TouchableOpacity

        key={item.path}

        activeOpacity={0.8}

        onPress={() => {

          router.push(
            item.path
          );

        }}


        style={{

          flexDirection: 'row',

          alignItems: 'center',

          marginLeft: 18,

          marginRight: 8,

          marginVertical: 2,

          paddingVertical: 10,

          paddingHorizontal: 12,

          borderRadius: 11,

          backgroundColor:
            isActive
              ? LIGHT_BLUE
              : 'transparent',

          borderWidth:
            isActive
              ? 1
              : 0,

          borderColor:
            isActive
              ? BLUE_BORDER
              : 'transparent',
        }}
      >

        {/* ==========================================
            CONNECTOR
        ========================================== */}

        <View
          style={{
            width: 2,

            height: 22,

            borderRadius: 2,

            backgroundColor:
              isActive
                ? GOLD
                : '#D8E0EB',

            marginRight: 10,
          }}
        />


        {/* ==========================================
            ICON
        ========================================== */}

        <View
          style={{
            width: 30,

            height: 30,

            borderRadius: 9,

            justifyContent:
              'center',

            alignItems:
              'center',

            backgroundColor:
              isActive
                ? LIGHT_GOLD
                : 'transparent',
          }}
        >

          <Icon
            size={17}

            color={
              isActive
                ? PRIMARY
                : MUTED
            }
          />

        </View>


        {/* ==========================================
            LABEL
        ========================================== */}

        <Text
          style={{

            flex: 1,

            marginLeft: 9,

            color:
              isActive
                ? PRIMARY
                : TEXT,

            fontSize: 13,

            fontWeight:
              isActive
                ? '700'
                : '500',

            letterSpacing: 0.1,
          }}
        >

          {item.label}

        </Text>


        {/* ==========================================
            ACTIVE GOLD DOT
        ========================================== */}

        {isActive && (

          <View
            style={{
              width: 6,

              height: 6,

              borderRadius: 3,

              backgroundColor:
                GOLD,
            }}
          />

        )}

      </TouchableOpacity>

    );
  };


  // ====================================================
  // UI
  // ====================================================

  return (

    <View
      style={{
        flex: 1,

        backgroundColor:
          DRAWER_BG,
      }}
    >


      {/* ==================================================
          HEADER
      ================================================== */}

      <View
        style={{

          paddingHorizontal: 20,

          paddingTop:
            insets.top + 18,

          paddingBottom: 18,

          borderBottomWidth: 1,

          borderBottomColor:
            BORDER,

          alignItems:
            'center',

          justifyContent:
            'center',

          backgroundColor:
            '#FFFFFF',
        }}
      >


        {/* LOGO CONTAINER */}

        <View
          style={{

            width: 158,

            height: 62,

            borderRadius: 16,

            backgroundColor:
              '#FFFFFF',

            alignItems:
              'center',

            justifyContent:
              'center',

            borderWidth: 1,

            borderColor:
              BORDER,

            shadowColor:
              PRIMARY,

            shadowOpacity:
              0.08,

            shadowRadius:
              10,

            shadowOffset: {
              width: 0,

              height: 4,
            },

            elevation: 3,
          }}
        >

          <Image

            source={
              require(
                '../../../assets/images/logo4.png'
              )
            }

            style={{

              width:
                Math.min(
                  140,
                  width * 0.35
                ),

              height: 50,

              resizeMode:
                'contain',
            }}
          />

        </View>


        {/* COMPANY TEXT */}

        <View
          style={{

            alignItems:
              'center',

            marginTop: 9,
          }}
        >

          <Text
            style={{

              color:
                TEXT,

              fontSize:
                13,

              fontWeight:
                '800',

              letterSpacing:
                0.5,

              textAlign:
                'center',
            }}
          >

            Asset - Wealth Management

          </Text>


          {/* GOLD DIVIDER */}

          <View
            style={{

              width: 30,

              height: 2,

              borderRadius: 5,

              backgroundColor:
                GOLD,

              marginVertical: 5,
            }}
          />


          <Text
            style={{

              color:
                MUTED,

              fontSize:
                10,

              fontWeight:
                '600',

              letterSpacing:
                0.8,

              textAlign:
                'center',
            }}
          >

            Wealth  ||  Trust  ||  Growth

          </Text>

        </View>

      </View>


      {/* ==================================================
          MENU
      ================================================== */}

      <DrawerContentScrollView

        {...props}

        showsVerticalScrollIndicator={
          false
        }

        contentContainerStyle={{

          paddingTop: 12,

          paddingHorizontal: 8,

          paddingBottom: 30,
        }}
      >


        {/* =================================================
            MAIN MENU
        ================================================= */}

        {menuItems.map(
          renderDrawerItem
        )}


        {/* =================================================
            MLM SECTION
        ================================================= */}

        <View
          style={{

            marginTop: 6,

            marginBottom: 6,
          }}
        >


          {/* ===============================================
              MLM HEADER
          =============================================== */}

          <TouchableOpacity

            activeOpacity={0.8}

            onPress={() => {

              setMlmOpen(
                (previous) =>
                  !previous
              );

            }}


            style={{

              flexDirection:
                'row',

              alignItems:
                'center',

              paddingVertical:
                12,

              paddingHorizontal:
                13,

              marginHorizontal:
                4,

              borderRadius:
                13,

              backgroundColor:
                isMlmActive ||
                mlmOpen
                  ? LIGHT_BLUE
                  : '#FFFFFF',

              borderWidth:
                isMlmActive ||
                mlmOpen
                  ? 1
                  : 1,

              borderColor:
                isMlmActive ||
                mlmOpen
                  ? BLUE_BORDER
                  : BORDER,
            }}
          >


            {/* MLM ICON */}

            <View
              style={{

                width: 36,

                height: 36,

                borderRadius: 11,

                alignItems:
                  'center',

                justifyContent:
                  'center',

                backgroundColor:
                  isMlmActive ||
                  mlmOpen
                    ? LIGHT_GOLD
                    : '#F4F7FB',
              }}
            >

              <Network

                size={20}

                color={
                  isMlmActive ||
                  mlmOpen
                    ? PRIMARY
                    : MUTED
                }

              />

            </View>


            {/* MLM LABEL */}

            <Text
              style={{

                flex: 1,

                marginLeft: 11,

                color:
                  isMlmActive ||
                  mlmOpen
                    ? PRIMARY
                    : TEXT,

                fontSize: 14,

                fontWeight:
                  '700',

                letterSpacing:
                  0.2,
              }}
            >

              MLM Program

            </Text>


            {/* GOLD ACTIVE DOT */}

            {isMlmActive && (

              <View
                style={{

                  width: 7,

                  height: 7,

                  borderRadius: 4,

                  backgroundColor:
                    GOLD,

                  marginRight: 9,
                }}
              />

            )}


            {/* ARROW */}

            {mlmOpen ? (

              <ChevronUp

                size={20}

                color={
                  PRIMARY
                }

              />

            ) : (

              <ChevronDown

                size={20}

                color={
                  isMlmActive
                    ? PRIMARY
                    : MUTED
                }

              />

            )}

          </TouchableOpacity>


          {/* ===============================================
              MLM CHILDREN
          =============================================== */}

          {mlmOpen && (

            <View
              style={{

                marginTop: 5,

                marginBottom: 5,

                paddingLeft: 2,
              }}
            >

              {mlmItems.map(
                renderMlmItem
              )}

            </View>

          )}

        </View>


        {/* =================================================
            OTHER MENU
        ================================================= */}

        {bottomMenuItems.map(
          renderDrawerItem
        )}

      </DrawerContentScrollView>


      {/* ==================================================
          LOGOUT
      ================================================== */}

      <View
        style={{

          paddingHorizontal: 20,

          paddingVertical: 15,

          borderTopWidth: 1,

          borderTopColor:
            BORDER,

          marginBottom:
            insets.bottom + 6,

          backgroundColor:
            '#FFFFFF',
        }}
      >

        <TouchableOpacity

          activeOpacity={0.8}

          onPress={
            handleLogout
          }

          style={{

            flexDirection:
              'row',

            alignItems:
              'center',

            paddingVertical:
              10,

            paddingHorizontal:
              12,

            borderRadius:
              12,

            backgroundColor:
              '#FFF8F8',

            borderWidth:
              1,

            borderColor:
              '#F4DCDC',
          }}
        >


          <View
            style={{

              width: 34,

              height: 34,

              borderRadius: 10,

              alignItems:
                'center',

              justifyContent:
                'center',

              backgroundColor:
                '#FFECEC',
            }}
          >

            <LogOut

              size={19}

              color="#C62828"

            />

          </View>


          <Text
            style={{

              color:
                '#C62828',

              fontSize:
                14,

              fontWeight:
                '700',

              marginLeft:
                12,

              letterSpacing:
                0.2,
            }}
          >

            Logout

          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );
}


// ======================================================
// DRAWER LAYOUT
// ======================================================

export default function DrawerLayout() {

  return (

    <Drawer

      drawerContent={(props) => (

        <CustomDrawerContent
          {...props}
        />

      )}


      screenOptions={{

        headerShown:
          false,

        drawerType:
          'front',

        overlayColor:
          'rgba(3,69,189,0.18)',

        drawerStyle: {

          backgroundColor:
            BG,

          width:
            '82%',

          borderTopRightRadius:
            0,

          borderBottomRightRadius:
            0,
        },


        drawerActiveTintColor:
          PRIMARY,


        drawerActiveBackgroundColor:
          LIGHT_BLUE,


        drawerInactiveTintColor:
          MUTED,


        drawerItemStyle: {

          borderRadius:
            13,

          marginHorizontal:
            8,
        },


        drawerLabelStyle: {

          marginLeft:
            -8,

          fontSize:
            14,

          fontWeight:
            '500',
        },

      }}
    >


      {/* ==================================================
          MAIN
      ================================================== */}

      <Drawer.Screen

        name="(tabs)"

        options={{

          title:
            'Home',

        }}

      />


      {/* ==================================================
          MLM ROUTES
      ================================================== */}

      <Drawer.Screen

        name="mlm"

        options={{

          title:
            'MLM Dashboard',

        }}

      />


      <Drawer.Screen

        name="mlm-code"

        options={{

          title:
            'My Referral Code',

        }}

      />


      <Drawer.Screen

        name="mlm-network"

        options={{

          title:
            'Referral Network',

        }}

      />


      <Drawer.Screen

        name="mlm-tree"

        options={{

          title:
            'Referral Tree',

        }}

      />


      <Drawer.Screen

        name="mlm-commission"

        options={{

          title:
            'Commission Structure',

        }}

      />


      <Drawer.Screen

        name="mlm-income"

        options={{

          title:
            'MLM Income',

        }}

      />


      <Drawer.Screen

        name="mlm-history"

        options={{

          title:
            'Income History',

        }}

      />


      <Drawer.Screen

        name="mlm-team"

        options={{

          title:
            'Team Reports',

        }}

      />


      {/* ==================================================
          OTHER ROUTES
      ================================================== */}

      <Drawer.Screen

        name="offers"

        options={{

          title:
            'Offers',

        }}

      />


      <Drawer.Screen

        name="notifications"

        options={{

          title:
            'Notifications',

        }}

      />


      <Drawer.Screen

        name="balanceSheet"

        options={{

          title:
            'Balance Sheet',

        }}

      />


      <Drawer.Screen

        name="support"

        options={{

          title:
            'Support',

        }}

      />

    </Drawer>

  );
}