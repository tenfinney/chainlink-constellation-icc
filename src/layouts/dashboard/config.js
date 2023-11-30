import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import SvgIcon from "@mui/material/SvgIcon";
import BarChartSquare02Icon from "src/icons/untitled-ui/duocolor/bar-chart-square-02";
import Building04Icon from "src/icons/untitled-ui/duocolor/building-04";
import CalendarIcon from "src/icons/untitled-ui/duocolor/calendar";
// import CurrencyBitcoinCircleIcon from "src/icons/untitled-ui/duocolor/currency-bitcoin-circle";
import LayoutAlt02Icon from "src/icons/untitled-ui/duocolor/layout-alt-02";
import Lock01Icon from "src/icons/untitled-ui/duocolor/lock-01";
import LogOut01Icon from "src/icons/untitled-ui/duocolor/log-out-01";
import Mail04Icon from "src/icons/untitled-ui/duocolor/mail-04";
// import MessageChatSquareIcon from "src/icons/untitled-ui/duocolor/message-chat-square";
// import ShoppingBag03Icon from "src/icons/untitled-ui/duocolor/shopping-bag-03";
import Upload04Icon from "src/icons/untitled-ui/duocolor/upload-04";
import Users03Icon from "src/icons/untitled-ui/duocolor/users-03";
import { tokens } from "src/locales/tokens";
import { paths } from "src/paths";
export const useSections = () => {
const { t } = useTranslation();
return useMemo(() => {
return [
{
// Note

subheader: t(tokens.nav.userAdmin),

// Newsroom
items: [
{
title: t(tokens.nav.overview),
path: paths.dashboard.index,
icon: (
<SvgIcon fontSize="small">
<Building04Icon />
</SvgIcon>
),
},
// Publication Manager
{
title: t(tokens.nav.lawSchPubManager),
path: paths.dashboard.lawSchPubManager,
icon: (
<SvgIcon fontSize="small">
<Users03Icon />
</SvgIcon>
),
},

// 2ND User Submissions
{
title: t(tokens.nav.blog),
path: paths.dashboard.blog.index,
icon: (
<SvgIcon fontSize="small">
<Upload04Icon />
</SvgIcon>
),

items: [
// sub Course Docket
{
title: t(tokens.nav.postList),
path: paths.dashboard.blog.index,
},

// Course Comments
{
title: t(tokens.nav.postDetails),
path: paths.dashboard.blog.postDetails,
},

// sub Final Submission
{
title: t(tokens.nav.postCreate),
path: paths.dashboard.blog.postCreate,
},
],
},

// 2ND User Chat
// {
//   title: t(tokens.nav.chat),
//   path: paths.dashboard.chat,
//   icon: (
//     <SvgIcon fontSize="small">
//       <MessageChatSquareIcon />
//     </SvgIcon>
//   ),
// },

// 2ND Student Profile
// {
//   title: t(tokens.nav.socialMedia),
//   path: paths.dashboard.social.index,
//   icon: (
//     <SvgIcon fontSize="small">
//       <Users03Icon />
//     </SvgIcon>
//   ),

//   items: [
//     {
//       title: t(tokens.nav.profile),
//       path: paths.dashboard.social.profile,
//     },

//     {
//       title: t(tokens.nav.feed),
//       path: paths.dashboard.social.feed,
//     },
//   ],
// },

],
},

// TOP Courses
{
subheader: t(tokens.nav.concepts),

items: [
// 2ND Course Catalog
{
title: t(tokens.nav.academy),
path: paths.dashboard.academy.index,
icon: (
<SvgIcon fontSize="small">
<LayoutAlt02Icon />
</SvgIcon>
),

items: [
// sub dashboard
{
title: t(tokens.nav.dashboard),
path: paths.dashboard.academy.index,
},

// sub course
{
title: t(tokens.nav.course),
path: paths.dashboard.academy.courseDetails,
},

// sub Dashboard
{
title: t(tokens.nav.logistics),
path: paths.dashboard.logistics.index,
},
],
},
// 2ND File Manager
{
title: t(tokens.nav.fileManager),
path: paths.dashboard.fileManager,
icon: (
<SvgIcon fontSize="small">
<Upload04Icon />
</SvgIcon>
),
},

{
title: t(tokens.nav.legalResources),
path: paths.dashboard.legalResources,
icon: (
<SvgIcon fontSize="small">
<Upload04Icon />
</SvgIcon>
),
},
],
},

// 2ND Ordering Courses
{
subheader: t(tokens.nav.pages),

items: [
// 2ND Enroll now
// 2ND Calendar
{
title: t(tokens.nav.calendar),
path: paths.dashboard.calendar,
icon: (
<SvgIcon fontSize="small">
<CalendarIcon />
</SvgIcon>
),
},
{
title: t(tokens.nav.jobList),
path: paths.dashboard.jobs.index,
icon: (
<SvgIcon fontSize="small">
<Building04Icon />
</SvgIcon>
),

// Enroll now - items

items: [
// sub-browse

// sub Course Categories
{
title: t(tokens.nav.browse),
path: paths.dashboard.jobs.index,
},

// sub Course List
{
title: t(tokens.nav.list),
path: paths.dashboard.products.index,
},

// sub details

// CLE Pricing
{
title: t(tokens.nav.pricing),
path: paths.pricing,
},

{
title: t(tokens.nav.details),
path: paths.dashboard.jobs.companies.details,
},

// sub create
{
title: t(tokens.nav.create),
path: paths.dashboard.jobs.create,
},
],
},

// CLE Checkout
{
title: t(tokens.nav.checkout),
path: paths.checkout,
icon: (
<SvgIcon fontSize="small">
<LogOut01Icon />
</SvgIcon>
),
},
],
},

// TOP Administration
{
subheader: "Administration",

items: [
// User Account
{
title: t(tokens.nav.account),
path: paths.dashboard.account,
icon: (
<SvgIcon fontSize="small">
<Users03Icon />
</SvgIcon>
),
},

// Authentication
{
title: t(tokens.nav.auth),
icon: (
<SvgIcon fontSize="small">
<Lock01Icon />
</SvgIcon>
),

// sub
items: [
{
title: t(tokens.nav.login),
items: [
// {
// title: 'Classic',
// path: paths.authDemo.login.classic
// },
{
title: "Login Now",
path: paths.authDemo.login.modern,
},
],
},

// sub
{
title: t(tokens.nav.register),
items: [
// {
// title: 'Classic',
// path: paths.authDemo.register.classic
// },
{
title: "Register Now",
path: paths.authDemo.register.modern,
},
],
},

// sub
{
title: t(tokens.nav.forgotPassword),
items: [
// {
// title: 'Classic',
// path: paths.authDemo.forgotPassword.classic
// },
{
title: "Retrieve Password Now",
path: paths.authDemo.forgotPassword.modern,
},
],
},

// sub
{
title: t(tokens.nav.resetPassword),
items: [
// {
// title: 'Classic',
// path: paths.authDemo.resetPassword.classic
// },
{
title: "Reset Password Now",
path: paths.authDemo.resetPassword.modern,
},
],
},

// sub
{
title: t(tokens.nav.verifyCode),
items: [
// {
// title: 'Classic',
// path: paths.authDemo.verifyCode.classic
// },
{
title: "Verify 2FA Code Now",
path: paths.authDemo.verifyCode.modern,
},
],
},
],
},

// 2ND Sales Stats
{
title: t(tokens.nav.ecommerce),
path: paths.dashboard.ecommerce,
icon: (
<SvgIcon fontSize="small">
<BarChartSquare02Icon />
</SvgIcon>
),
},

// W3LT
{
title: "Web3LegalTools.com",
path: "https://web3legaltools.com",
external: true,
icon: (
<SvgIcon fontSize="small">
<LayoutAlt02Icon />
</SvgIcon>
),
},

// 2ND Contact
{
title: t(tokens.nav.contact),
path: paths.contact,
icon: (
<SvgIcon fontSize="small">
<Mail04Icon />
</SvgIcon>
),
},
],
},
];
}, [t]);
};
