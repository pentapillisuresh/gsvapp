// login.jsx

import { useRouter } from 'expo-router';

import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
} from 'lucide-react-native';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  ActivityIndicator,
  Alert,
  Animated,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { authAPI } from '../api';

import {
  getToken,
  getUser,
  storeIsLogin,
  storeToken,
  storeUser,
} from '../utils/storage';


// ======================================================
// COLORS
// ======================================================

const BG = '#FFFFFF';

const CARD = '#F7F9FC';

const PRIMARY = '#0345BD';

const GOLD = '#FCE159';

const DARK_BLUE = '#06245C';

const BORDER = '#DCE5F2';

const TEXT = '#0B1F3A';

const MUTED = '#64748B';

const INPUT_BG = '#FFFFFF';


// ======================================================
// LOGIN SCREEN
// ======================================================

export default function LoginScreen() {

  const insets = useSafeAreaInsets();

  const router = useRouter();


  // ====================================================
  // STATE
  // ====================================================

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [showSupport, setShowSupport] = useState(false);

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);


  // ====================================================
  // ANIMATION
  // ====================================================

  const fadeAnim = useRef(
    new Animated.Value(0)
  ).current;

  const slideAnim = useRef(
    new Animated.Value(40)
  ).current;


  // ====================================================
  // CHECK AUTH
  // ====================================================

  useEffect(() => {

    const checkAuth = async () => {

      try {

        const token = await getToken();

        const user = await getUser();

        if (token && user) {

          // Already authenticated
          // Redirect to home

          router.replace('/home');
        }

      } catch (error) {

        console.error(
          'Auth check error:',
          error
        );

      } finally {

        setIsCheckingAuth(false);
      }
    };

    checkAuth();

  }, []);


  // ====================================================
  // ENTRY ANIMATION
  // ====================================================

  useEffect(() => {

    Animated.parallel([

      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }
      ),

      Animated.timing(
        slideAnim,
        {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }
      ),

    ]).start();

  }, [
    fadeAnim,
    slideAnim,
  ]);


  // ====================================================
  // LOGIN
  // ====================================================

  const handleLogin = async () => {

    // Validation

    if (
      !email.trim() ||
      !password.trim()
    ) {

      Alert.alert(
        'Missing Fields',
        'Please enter your Email and Password.'
      );

      return;
    }


    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
      !emailRegex.test(
        email.trim()
      )
    ) {

      Alert.alert(
        'Invalid Email',
        'Please enter a valid email address.'
      );

      return;
    }


    setLoading(true);


    try {

      const response =
        await authAPI.login({
          email: email.trim(),
          password,
        });


      if (
        response.success &&
        response.data?.token
      ) {

        // Store token

        await storeToken(
          response.data.token
        );


        // Store user

        await storeUser(
          response.data.user
        );


        // Store login state

        await storeIsLogin('true');


        // Navigate home

        router.replace('/home');

      } else {

        Alert.alert(
          'Login Failed',
          response.message ||
            'Invalid credentials. Please try again.'
        );
      }

    } catch (error) {

      const errorMsg =
        error?.message ||
        'An unexpected error occurred. Please try again.';


      Alert.alert(
        'Login Error',
        errorMsg
      );

    } finally {

      setLoading(false);
    }
  };


  // ====================================================
  // AUTH CHECK LOADING
  // ====================================================

  if (isCheckingAuth) {

    return (

      <View
        style={{
          flex: 1,

          justifyContent: 'center',

          alignItems: 'center',

          backgroundColor: BG,
        }}
      >

        <ActivityIndicator
          size="large"
          color={PRIMARY}
        />

      </View>
    );
  }


  // ====================================================
  // MAIN UI
  // ====================================================

  return (

    <View
      style={{
        flex: 1,

        backgroundColor: BG,

        position: 'relative',
      }}
    >

      {/* ==================================================
          BOTTOM BRAND IMAGE
      ================================================== */}

      <Image
        source={require('../../assets/images/loginbottom.png')}

        pointerEvents="none"

        style={{
          position: 'absolute',

          left: 0,

          right: 0,

          bottom: 0,

          width: '100%',

          height: 155,

          resizeMode: 'cover',

          zIndex: 0,
        }}
      />


      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <ScrollView

        contentContainerStyle={{

          flexGrow: 1,

          paddingTop:
            insets.top + 16,

          paddingBottom:
            insets.bottom + 165,

          paddingHorizontal: 24,

          zIndex: 1,
        }}

        keyboardShouldPersistTaps="handled"

        showsVerticalScrollIndicator={false}
      >


        {/* ==================================================
            LOGO
        ================================================== */}

        <Animated.View

          style={{

            opacity: fadeAnim,

            transform: [
              {
                translateY: slideAnim,
              },
            ],

            alignItems: 'center',

            marginBottom: 18,
          }}
        >

          <View
            style={{
              width: 156,

              height: 156,

              borderRadius: 78,

              backgroundColor: '#FFFFFF',

              justifyContent: 'center',

              alignItems: 'center',

              borderWidth: 1,

              borderColor: BORDER,

              shadowColor: PRIMARY,

              shadowOpacity: 0.10,

              shadowRadius: 15,

              shadowOffset: {
                width: 0,

                height: 6,
              },

              elevation: 5,
            }}
          >

            <Image

              source={require('../../assets/images/logo4.png')}

              style={{

                width: 140,

                height: 140,

                resizeMode: 'contain',
              }}
            />

          </View>


          <Text

            style={{

              color: DARK_BLUE,

              fontSize: 16,

              marginTop: 10,

              fontWeight: '600',

              letterSpacing: 0.4,

              textAlign: 'center',
            }}
          >
            Your Trusted Investment Partner
          </Text>

        </Animated.View>


        {/* ==================================================
            LOGIN CARD
        ================================================== */}

        <Animated.View

          style={{

            opacity: fadeAnim,

            transform: [
              {
                translateY: slideAnim,
              },
            ],

            backgroundColor: CARD,

            borderRadius: 24,

            padding: 24,

            borderWidth: 1,

            borderColor: BORDER,

            marginBottom: 20,

            shadowColor: PRIMARY,

            shadowOpacity: 0.07,

            shadowRadius: 18,

            shadowOffset: {
              width: 0,

              height: 8,
            },

            elevation: 3,
          }}
        >


          {/* ==================================================
              CARD HEADER
          ================================================== */}

          <View
            style={{
              marginBottom: 26,
            }}
          >

            <View
              style={{
                width: 42,

                height: 4,

                backgroundColor: GOLD,

                borderRadius: 10,

                marginBottom: 12,
              }}
            />

            <Text

              style={{

                color: TEXT,

                fontSize: 24,

                fontWeight: '800',

                marginBottom: 6,
              }}
            >
              Welcome Back
            </Text>


            <Text

              style={{

                color: MUTED,

                fontSize: 14,

                lineHeight: 21,
              }}
            >
              Sign in to your investor account
            </Text>

          </View>


          {/* ==================================================
              EMAIL
          ================================================== */}

          <Text

            style={{

              color: TEXT,

              fontSize: 13,

              fontWeight: '700',

              marginBottom: 8,
            }}
          >
            Email
          </Text>


          <View

            style={{

              flexDirection: 'row',

              alignItems: 'center',

              backgroundColor: INPUT_BG,

              borderRadius: 13,

              borderWidth: 1,

              borderColor: BORDER,

              marginBottom: 20,

              paddingHorizontal: 15,

              minHeight: 54,
            }}
          >

            <View
              style={{
                width: 34,

                height: 34,

                borderRadius: 10,

                backgroundColor:
                  'rgba(3,69,189,0.08)',

                justifyContent: 'center',

                alignItems: 'center',
              }}
            >

              <Mail
                size={18}
                color={PRIMARY}
              />

            </View>


            <TextInput

              value={email}

              onChangeText={setEmail}

              placeholder="Enter your email"

              placeholderTextColor="#94A3B8"

              autoCapitalize="none"

              keyboardType="email-address"

              style={{

                flex: 1,

                color: TEXT,

                fontSize: 15,

                paddingVertical: 14,

                marginLeft: 10,
              }}
            />

          </View>


          {/* ==================================================
              PASSWORD
          ================================================== */}

          <Text

            style={{

              color: TEXT,

              fontSize: 13,

              fontWeight: '700',

              marginBottom: 8,
            }}
          >
            Password
          </Text>


          <View

            style={{

              flexDirection: 'row',

              alignItems: 'center',

              backgroundColor: INPUT_BG,

              borderRadius: 13,

              borderWidth: 1,

              borderColor: BORDER,

              marginBottom: 26,

              paddingHorizontal: 15,

              minHeight: 54,
            }}
          >

            <View
              style={{
                width: 34,

                height: 34,

                borderRadius: 10,

                backgroundColor:
                  'rgba(3,69,189,0.08)',

                justifyContent: 'center',

                alignItems: 'center',
              }}
            >

              <Lock
                size={18}
                color={PRIMARY}
              />

            </View>


            <TextInput

              value={password}

              onChangeText={setPassword}

              placeholder="Enter your password"

              placeholderTextColor="#94A3B8"

              secureTextEntry={
                !showPassword
              }

              style={{

                flex: 1,

                color: TEXT,

                fontSize: 15,

                paddingVertical: 14,

                marginLeft: 10,
              }}
            />


            <TouchableOpacity

              onPress={() =>
                setShowPassword(
                  !showPassword
                )
              }

              activeOpacity={0.7}
            >

              {showPassword ? (

                <EyeOff
                  size={20}
                  color={MUTED}
                />

              ) : (

                <Eye
                  size={20}
                  color={MUTED}
                />

              )}

            </TouchableOpacity>

          </View>


          {/* ==================================================
              LOGIN BUTTON
          ================================================== */}

          <TouchableOpacity

            onPress={handleLogin}

            disabled={loading}

            activeOpacity={0.85}

            style={{

              backgroundColor: PRIMARY,

              borderRadius: 999,

              minHeight: 54,

              alignItems: 'center',

              justifyContent: 'center',

              marginBottom: 15,

              shadowColor: PRIMARY,

              shadowOpacity: 0.20,

              shadowRadius: 10,

              shadowOffset: {
                width: 0,

                height: 5,
              },

              elevation: 4,
            }}
          >

            {loading ? (

              <ActivityIndicator
                color="#FFFFFF"
              />

            ) : (

              <View
                style={{
                  flexDirection: 'row',

                  alignItems: 'center',

                  justifyContent: 'center',

                  gap: 8,
                }}
              >

                <Text

                  style={{

                    color: '#FFFFFF',

                    fontSize: 16,

                    fontWeight: '800',

                    letterSpacing: 0.5,
                  }}
                >
                  Login
                </Text>

                <Text
                  style={{
                    color: GOLD,

                    fontSize: 18,

                    fontWeight: '900',
                  }}
                >
                  →
                </Text>

              </View>

            )}

          </TouchableOpacity>


          {/* ==================================================
              FORGOT PASSWORD
          ================================================== */}

          <TouchableOpacity

            activeOpacity={0.7}

            style={{
              alignItems: 'center',
            }}
          >

            <Text

              style={{

                color: PRIMARY,

                fontSize: 14,

                fontWeight: '700',
              }}
            >
              Forgot Password?
            </Text>

          </TouchableOpacity>

        </Animated.View>


        {/* ==================================================
            SUPPORT
        ================================================== */}

        <Animated.View

          style={{

            opacity: fadeAnim,

            alignItems: 'center',

            zIndex: 2,
          }}
        >

          <TouchableOpacity

            onPress={() =>
              setShowSupport(
                !showSupport
              )
            }

            activeOpacity={0.7}

            style={{
              marginBottom: 8,
            }}
          >

            <Text

              style={{

                color: MUTED,

                fontSize: 14,
              }}
            >
              Need help?{' '}

              <Text

                style={{

                  color: PRIMARY,

                  fontWeight: '700',
                }}
              >
                Contact Support
              </Text>

            </Text>

          </TouchableOpacity>


          {/* ==================================================
              SUPPORT CARD
          ================================================== */}

          {showSupport && (

            <View

              style={{

                backgroundColor: '#FFFFFF',

                borderRadius: 16,

                padding: 18,

                borderWidth: 1,

                borderColor: BORDER,

                width: '100%',

                marginTop: 8,

                gap: 14,

                shadowColor: PRIMARY,

                shadowOpacity: 0.08,

                shadowRadius: 12,

                shadowOffset: {
                  width: 0,

                  height: 5,
                },

                elevation: 3,
              }}
            >

              {/* PHONE */}

              <View

                style={{

                  flexDirection: 'row',

                  alignItems: 'center',

                  gap: 12,
                }}
              >

                <View
                  style={{
                    width: 34,

                    height: 34,

                    borderRadius: 10,

                    backgroundColor:
                      'rgba(3,69,189,0.08)',

                    justifyContent:
                      'center',

                    alignItems:
                      'center',
                  }}
                >

                  <Phone
                    size={18}
                    color={PRIMARY}
                  />

                </View>


                <Text

                  style={{

                    color: TEXT,

                    fontSize: 14,

                    fontWeight: '600',
                  }}
                >
                  +91 1800 234 5678
                </Text>

              </View>


              {/* EMAIL */}

              <View

                style={{

                  flexDirection: 'row',

                  alignItems: 'center',

                  gap: 12,
                }}
              >

                <View
                  style={{
                    width: 34,

                    height: 34,

                    borderRadius: 10,

                    backgroundColor:
                      'rgba(3,69,189,0.08)',

                    justifyContent:
                      'center',

                    alignItems:
                      'center',
                  }}
                >

                  <Mail
                    size={18}
                    color={PRIMARY}
                  />

                </View>


                <Text

                  style={{

                    color: TEXT,

                    fontSize: 14,

                    fontWeight: '600',
                  }}
                >
                  support@finsure.com
                </Text>

              </View>

            </View>

          )}

        </Animated.View>


        {/* ==================================================
            FOOTER
        ================================================== */}

        <View
          style={{
            alignItems: 'center',

            marginTop: 28,

            paddingBottom: 10,
          }}
        >

          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',

              gap: 7,

              marginBottom: 6,
            }}
          >

            <View
              style={{
                width: 24,

                height: 2,

                backgroundColor: GOLD,
              }}
            />

            <Text
              style={{
                color: PRIMARY,

                fontSize: 11,

                fontWeight: '800',

                letterSpacing: 1,
              }}
            >
              GLOBAL SYNERGY VENTURES
            </Text>

            <View
              style={{
                width: 24,

                height: 2,

                backgroundColor: GOLD,
              }}
            />

          </View>


          <Text

            style={{

              color: MUTED,

              fontSize: 10,

              textAlign: 'center',
            }}
          >
            © 2026 GSV. All rights reserved.
          </Text>

        </View>

      </ScrollView>

    </View>
  );
}