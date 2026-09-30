import React from 'react';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import {
  Copy,
  Share2,
  MessageCircle,
  Link as LinkIcon,
  ChevronRight,
  Users,
} from 'lucide-react-native';

import * as Clipboard from 'expo-clipboard';

import { useRouter } from 'expo-router';

import {
  MLM_SUMMARY,
} from '../../data/mockData';

import {
  Header,
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
// SCREEN
// ======================================================

export default function MLMCode() {

  const router = useRouter();


  // ====================================================
  // COPY CODE
  // ====================================================

  const copyCode = async () => {

    await Clipboard.setStringAsync(
      MLM_SUMMARY.referralCode,
    );

    Alert.alert(
      'Copied',
      'Referral code copied successfully.',
    );
  };


  // ====================================================
  // COPY LINK
  // ====================================================

  const copyLink = async () => {

    await Clipboard.setStringAsync(
      MLM_SUMMARY.referralLink,
    );

    Alert.alert(
      'Copied',
      'Referral link copied successfully.',
    );
  };


  // ====================================================
  // SHARE
  // ====================================================

  const share = () => {

    Alert.alert(
      'Share Referral',
      'Share functionality can be connected to the native Share API.',
    );
  };


  // ====================================================
  // UI
  // ====================================================

  return (

    <View style={styles.container}>


      {/* ==================================================
          HEADER
      ================================================== */}

      <View style={styles.headerWrapper}>

        <Header
          title="My Referral Code"
          subtitle="Invite users to your network"
          onBack={() => router.back()}
        />

      </View>


      <ScrollView

        contentContainerStyle={
          styles.content
        }

        showsVerticalScrollIndicator={
          false
        }
      >


        {/* ==================================================
            TOP ICON
        ================================================== */}

        <View style={styles.iconCircle}>

          <View
            style={styles.iconInner}
          >

            <Users
              size={31}
              color={PRIMARY}
            />

          </View>

        </View>


        {/* ==================================================
            TITLE
        ================================================== */}

        <Text style={styles.title}>
          Your Referral Code
        </Text>


        <View
          style={styles.titleAccent}
        />


        <Text style={styles.description}>

          Share your referral code with friends and
          family to build your network.

        </Text>


        {/* ==================================================
            REFERRAL CODE CARD
        ================================================== */}

        <View
          style={styles.codeCard}
        >

          {/* GOLD TOP LINE */}

          <View
            style={styles.goldLine}
          />


          <View
            style={styles.codeHeader}
          >

            <View>

              <Text
                style={styles.codeLabel}
              >
                YOUR UNIQUE CODE
              </Text>

              <Text
                style={styles.code}
              >
                {MLM_SUMMARY.referralCode}
              </Text>

            </View>


            <TouchableOpacity

              onPress={copyCode}

              activeOpacity={0.75}

              style={styles.copyButton}
            >

              <Copy
                size={20}
                color={PRIMARY}
              />

            </TouchableOpacity>

          </View>


          <Text
            style={styles.codeHint}
          >
            Share this code when inviting a new member.
          </Text>

        </View>


        {/* ==================================================
            REFERRAL LINK
        ================================================== */}

        <Text style={styles.label}>
          Referral Link
        </Text>


        <View
          style={styles.linkBox}
        >

          <View
            style={styles.linkIconBox}
          >

            <LinkIcon
              size={18}
              color={PRIMARY}
            />

          </View>


          <Text
            style={styles.link}
            numberOfLines={1}
          >
            {MLM_SUMMARY.referralLink}
          </Text>


          <TouchableOpacity
            onPress={copyLink}
            activeOpacity={0.75}
            style={styles.linkCopy}
          >

            <Copy
              size={19}
              color={PRIMARY}
            />

          </TouchableOpacity>

        </View>


        {/* ==================================================
            SHARE BUTTON
        ================================================== */}

        <TouchableOpacity

          style={styles.shareButton}

          onPress={share}

          activeOpacity={0.85}
        >

          <View
            style={styles.shareIcon}
          >

            <Share2
              size={19}
              color={DARK_BLUE}
            />

          </View>


          <Text
            style={styles.shareText}
          >
            Share Now
          </Text>


          <ChevronRight
            size={19}
            color={DARK_BLUE}
          />

        </TouchableOpacity>


        {/* ==================================================
            SHARE OPTIONS
        ================================================== */}

        <View
          style={styles.shareRow}
        >


          {/* WHATSAPP */}

          <TouchableOpacity
            style={styles.shareItem}
            activeOpacity={0.8}
          >

            <View
              style={styles.shareOptionIcon}
            >

              <MessageCircle
                size={22}
                color={PRIMARY}
              />

            </View>

            <Text
              style={styles.shareLabel}
            >
              WhatsApp
            </Text>

          </TouchableOpacity>


          {/* COPY LINK */}

          <TouchableOpacity

            style={styles.shareItem}

            onPress={copyLink}

            activeOpacity={0.8}
          >

            <View
              style={styles.shareOptionIcon}
            >

              <Copy
                size={22}
                color={PRIMARY}
              />

            </View>

            <Text
              style={styles.shareLabel}
            >
              Copy Link
            </Text>

          </TouchableOpacity>


          {/* SHARE */}

          <TouchableOpacity

            style={styles.shareItem}

            onPress={share}

            activeOpacity={0.8}
          >

            <View
              style={styles.shareOptionIcon}
            >

              <Share2
                size={22}
                color={PRIMARY}
              />

            </View>

            <Text
              style={styles.shareLabel}
            >
              Share
            </Text>

          </TouchableOpacity>


        </View>


        {/* ==================================================
            HOW IT WORKS
        ================================================== */}

        <View
          style={styles.infoCard}
        >

          {/* CARD HEADER */}

          <View
            style={styles.infoHeader}
          >

            <View>

              <Text
                style={styles.infoTitle}
              >
                How it works?
              </Text>

              <Text
                style={styles.infoSubtitle}
              >
                Build your referral network
              </Text>

            </View>


            <View
              style={styles.infoGoldBox}
            >

              <GitIcon />

            </View>

          </View>


          <View
            style={styles.infoDivider}
          />


          {/* STEP 1 */}

          <Step
            number="1"
            text="Share your referral link with friends."
          />


          {/* STEP 2 */}

          <Step
            number="2"
            text="They register using your referral code."
          />


          {/* STEP 3 */}

          <Step
            number="3"
            text="When they invest, you can earn Level 1 commission."
          />


          {/* STEP 4 */}

          <Step
            number="4"
            text="Their referrals can create your Level 2 to Level 5 network."
          />

        </View>


        {/* ==================================================
            COMMISSION BUTTON
        ================================================== */}

        <TouchableOpacity

          style={
            styles.commissionButton
          }

          onPress={() =>
            router.push(
              '/mlm-commission'
            )
          }

          activeOpacity={0.85}
        >

          <View
            style={
              styles.commissionIcon
            }
          >

            <Text
              style={
                styles.percentSymbol
              }
            >
              %
            </Text>

          </View>


          <Text
            style={
              styles.commissionText
            }
          >
            View Commission Structure
          </Text>


          <ChevronRight
            size={19}
            color={PRIMARY}
          />

        </TouchableOpacity>


        {/* ==================================================
            BOTTOM BRAND
        ================================================== */}

        <View
          style={styles.bottomBrand}
        >

          <View
            style={styles.brandLine}
          />

          <Text
            style={styles.brandText}
          >
            GLOBAL SYNERGY VENTURES
          </Text>

          <View
            style={styles.brandLine}
          />

        </View>


      </ScrollView>

    </View>
  );
}


// ======================================================
// SMALL ICON
// ======================================================

function GitIcon() {

  return (

    <View
      style={{
        width: 22,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >

      <View
        style={{
          width: 7,
          height: 7,
          borderRadius: 4,
          backgroundColor: PRIMARY,
        }}
      />

      <View
        style={{
          position: 'absolute',
          width: 2,
          height: 12,
          backgroundColor: PRIMARY,
          top: 6,
        }}
      />

      <View
        style={{
          position: 'absolute',
          width: 12,
          height: 2,
          backgroundColor: PRIMARY,
          top: 11,
          left: 5,
        }}
      />

      <View
        style={{
          position: 'absolute',
          width: 7,
          height: 7,
          borderRadius: 4,
          backgroundColor: PRIMARY,
          bottom: 1,
          left: 2,
        }}
      />

      <View
        style={{
          position: 'absolute',
          width: 7,
          height: 7,
          borderRadius: 4,
          backgroundColor: PRIMARY,
          bottom: 1,
          right: 2,
        }}
      />

    </View>

  );
}


// ======================================================
// STEP COMPONENT
// ======================================================

function Step({
  number,
  text,
}) {

  return (

    <View
      style={styles.step}
    >


      {/* NUMBER */}

      <View
        style={styles.stepNumber}
      >

        <Text
          style={styles.stepNumberText}
        >
          {number}
        </Text>

      </View>


      {/* CONNECTOR */}

      <View
        style={styles.stepConnector}
      />


      {/* TEXT */}

      <Text
        style={styles.stepText}
      >
        {text}
      </Text>

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

    paddingTop: 10,

    paddingHorizontal: 4,

    paddingBottom: 4,

    backgroundColor:
      WHITE,

    borderBottomWidth: 1,

    borderBottomColor:
      BORDER,

  },


  // ====================================================
  // CONTENT
  // ====================================================

  content: {

    paddingHorizontal: 20,

    paddingTop: 22,

    paddingBottom: 45,

    alignItems: 'center',

  },


  // ====================================================
  // ICON
  // ====================================================

  iconCircle: {

    width: 82,

    height: 82,

    borderRadius: 41,

    backgroundColor:
      LIGHT_GOLD,

    alignItems:
      'center',

    justifyContent:
      'center',

    borderWidth: 1,

    borderColor:
      'rgba(252,225,89,0.55)',

  },


  iconInner: {

    width: 62,

    height: 62,

    borderRadius: 31,

    backgroundColor:
      WHITE,

    alignItems:
      'center',

    justifyContent:
      'center',

    borderWidth: 1,

    borderColor:
      'rgba(3,69,189,0.10)',

    shadowColor:
      PRIMARY,

    shadowOpacity: 0.08,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,

  },


  // ====================================================
  // TITLE
  // ====================================================

  title: {

    fontSize: 22,

    fontWeight: '900',

    color:
      TEXT,

    marginTop: 15,

    textAlign: 'center',

  },


  titleAccent: {

    width: 32,

    height: 3,

    borderRadius: 5,

    backgroundColor:
      GOLD,

    marginTop: 9,

  },


  description: {

    textAlign:
      'center',

    color:
      MUTED,

    fontSize: 12,

    lineHeight: 19,

    marginTop: 9,

    maxWidth: 310,

  },


  // ====================================================
  // CODE CARD
  // ====================================================

  codeCard: {

    width: '100%',

    backgroundColor:
      PRIMARY,

    borderRadius: 18,

    padding: 18,

    marginTop: 22,

    overflow: 'hidden',

    borderWidth: 1,

    borderColor:
      'rgba(252,225,89,0.25)',

    shadowColor:
      PRIMARY,

    shadowOpacity: 0.16,

    shadowRadius: 14,

    shadowOffset: {
      width: 0,
      height: 7,
    },

    elevation: 5,

  },


  goldLine: {

    position:
      'absolute',

    top: 0,

    left: 18,

    right: 18,

    height: 3,

    backgroundColor:
      GOLD,

    borderBottomLeftRadius: 5,

    borderBottomRightRadius: 5,

  },


  codeHeader: {

    flexDirection:
      'row',

    alignItems:
      'center',

    justifyContent:
      'space-between',

    paddingTop: 4,

  },


  codeLabel: {

    color:
      'rgba(255,255,255,0.65)',

    fontSize: 10,

    fontWeight: '700',

    letterSpacing: 1,

  },


  code: {

    color:
      '#FFFFFF',

    fontSize: 27,

    fontWeight: '900',

    letterSpacing: 1.5,

    marginTop: 4,

  },


  copyButton: {

    width: 43,

    height: 43,

    borderRadius: 12,

    backgroundColor:
      GOLD,

    alignItems:
      'center',

    justifyContent:
      'center',

  },


  codeHint: {

    color:
      'rgba(255,255,255,0.70)',

    fontSize: 10,

    marginTop: 13,

  },


  // ====================================================
  // LINK
  // ====================================================

  label: {

    width: '100%',

    color:
      TEXT,

    fontSize: 12,

    fontWeight: '700',

    marginTop: 22,

    marginBottom: 8,

  },


  linkBox: {

    width: '100%',

    backgroundColor:
      WHITE,

    borderWidth: 1,

    borderColor:
      BORDER,

    borderRadius: 14,

    padding: 8,

    paddingLeft: 10,

    flexDirection:
      'row',

    alignItems:
      'center',

  },


  linkIconBox: {

    width: 34,

    height: 34,

    borderRadius: 10,

    backgroundColor:
      LIGHT_BLUE,

    alignItems:
      'center',

    justifyContent:
      'center',

  },


  link: {

    flex: 1,

    color:
      TEXT,

    fontSize: 11,

    marginLeft: 8,

  },


  linkCopy: {

    width: 38,

    height: 38,

    borderRadius: 10,

    backgroundColor:
      LIGHT_GOLD,

    alignItems:
      'center',

    justifyContent:
      'center',

  },


  // ====================================================
  // SHARE BUTTON
  // ====================================================

  shareButton: {

    width: '100%',

    backgroundColor:
      GOLD,

    borderRadius: 14,

    paddingVertical: 14,

    flexDirection:
      'row',

    alignItems:
      'center',

    justifyContent:
      'center',

    marginTop: 15,

    shadowColor:
      PRIMARY,

    shadowOpacity: 0.10,

    shadowRadius: 9,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,

  },


  shareIcon: {

    marginRight: 8,

  },


  shareText: {

    color:
      DARK_BLUE,

    fontSize: 14,

    fontWeight: '900',

    flex: 0,

  },


  // ====================================================
  // SHARE OPTIONS
  // ====================================================

  shareRow: {

    width: '100%',

    flexDirection:
      'row',

    justifyContent:
      'space-between',

    marginTop: 18,

  },


  shareItem: {

    width: '31%',

    alignItems:
      'center',

    justifyContent:
      'center',

  },


  shareOptionIcon: {

    width: 47,

    height: 47,

    borderRadius: 14,

    backgroundColor:
      WHITE,

    borderWidth: 1,

    borderColor:
      BORDER,

    alignItems:
      'center',

    justifyContent:
      'center',

    shadowColor:
      PRIMARY,

    shadowOpacity: 0.04,

    shadowRadius: 6,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 1,

  },


  shareLabel: {

    fontSize: 10,

    color:
      MUTED,

    fontWeight:
      '600',

    marginTop: 7,

  },


  // ====================================================
  // INFO CARD
  // ====================================================

  infoCard: {

    width: '100%',

    backgroundColor:
      WHITE,

    borderRadius: 18,

    borderWidth: 1,

    borderColor:
      BORDER,

    padding: 18,

    marginTop: 25,

    shadowColor:
      PRIMARY,

    shadowOpacity: 0.045,

    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 2,

  },


  infoHeader: {

    flexDirection:
      'row',

    alignItems:
      'center',

    justifyContent:
      'space-between',

  },


  infoTitle: {

    fontSize: 17,

    fontWeight: '900',

    color:
      TEXT,

  },


  infoSubtitle: {

    fontSize: 10,

    color:
      MUTED,

    marginTop: 3,

  },


  infoGoldBox: {

    width: 40,

    height: 40,

    borderRadius: 12,

    backgroundColor:
      LIGHT_GOLD,

    alignItems:
      'center',

    justifyContent:
      'center',

    borderWidth: 1,

    borderColor:
      'rgba(252,225,89,0.45)',

  },


  infoDivider: {

    height: 1,

    backgroundColor:
      BORDER,

    marginVertical: 16,

  },


  // ====================================================
  // STEP
  // ====================================================

  step: {

    flexDirection:
      'row',

    alignItems:
      'center',

    minHeight: 42,

    marginBottom: 13,

    position: 'relative',

  },


  stepNumber: {

    width: 30,

    height: 30,

    borderRadius: 15,

    backgroundColor:
      PRIMARY,

    alignItems:
      'center',

    justifyContent:
      'center',

    marginRight: 12,

    borderWidth: 2,

    borderColor:
      GOLD,

    zIndex: 2,

  },


  stepNumberText: {

    color:
      '#FFFFFF',

    fontWeight: '900',

    fontSize: 12,

  },


  stepConnector: {

    position:
      'absolute',

    left: 14,

    top: 31,

    width: 2,

    height: 27,

    backgroundColor:
      '#D9E1EC',

  },


  stepText: {

    flex: 1,

    fontSize: 12,

    color:
      '#4F5D6D',

    lineHeight: 18,

  },


  // ====================================================
  // COMMISSION BUTTON
  // ====================================================

  commissionButton: {

    width: '100%',

    borderWidth: 1,

    borderColor:
      'rgba(3,69,189,0.20)',

    backgroundColor:
      WHITE,

    borderRadius: 14,

    paddingVertical: 12,

    paddingHorizontal: 14,

    flexDirection:
      'row',

    alignItems:
      'center',

    marginTop: 15,

  },


  commissionIcon: {

    width: 34,

    height: 34,

    borderRadius: 10,

    backgroundColor:
      LIGHT_GOLD,

    alignItems:
      'center',

    justifyContent:
      'center',

    marginRight: 10,

  },


  percentSymbol: {

    color:
      PRIMARY,

    fontSize: 18,

    fontWeight: '900',

  },


  commissionText: {

    flex: 1,

    color:
      PRIMARY,

    fontWeight: '800',

    fontSize: 13,

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

    gap: 8,

    marginTop: 30,

  },


  brandLine: {

    width: 25,

    height: 2,

    backgroundColor:
      GOLD,

    borderRadius: 5,

  },


  brandText: {

    color:
      PRIMARY,

    fontSize: 8.5,

    fontWeight: '900',

    letterSpacing: 0.7,

  },

});