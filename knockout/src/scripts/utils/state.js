import ko from 'knockout';
import app from '../../views/app/index';
import header from '../../views/layouts/header/index';

import login from '../../views/pages/login/index';
import pdp from '../../views/pages/pdp/index';
import homepage from '../../views/pages/homepage/index';
import cart from '../../views/pages/cart/index';
import footer from '../../views/layouts/footer/index';

// import landing from '../../views/pages/landing/index';
// import authentication from '../../views/pages/authentication/index';
// import quickOrder from '../../views/pages/quick-order/index';
// import cart from '../../views/pages/cart/index';


// import ContentSlotComp from '../../views/components/cartridges/content-slot/index';
// import HeaderComp from '../../views/components/cartridges/header/index';
// import HeaderSectionUtilityComp from '../../views/components/cartridges/header-section-utility/index';
// import HeaderSectionMainComp from '../../views/components/cartridges/header-section-main/index';
// import HeaderSectionNavigationBCCComp from '../../views/components/cartridges/header-section-navigation-bcc/index';
// import HeaderUtilityPromoComp from '../../views/components/cartridges/header-utility-promo/index';
// import HeaderUtilityLinkComp from '../../views/components/cartridges/header-utility-link/index';
// import HeaderMainLogoComp from '../../views/components/cartridges/header-main-logo/index';
// import HeaderMainMinicartComp from '../../views/components/cartridges/header-main-minicart/index';
// import HeaderMainSignInComp from '../../views/components/cartridges/header-main-sign-in/index';
// import HeaderMainSearchComp from '../../views/components/cartridges/header-main-search/index';
// import HeaderUtilityLinkModalComp from '../../views/components/cartridges/header-utility-link-modal/index';
// import HeaderNavigationUtilityComp from '../../views/components/cartridges/header-navigation-utility/index';
// import SimpleNavigationElementComp from '../../views/components/cartridges/simple-navigation-element/index';
// import HeaderNavigationUtilityLinkComp from '../../views/components/cartridges/header-navigation-utility-link/index';
// import HeaderNavigationUtilityLinkModalComp from '../../views/components/cartridges/header-navigation-utility-link-modal/index';
// import FooterComp from '../../views/components/cartridges/footer/index';
// import FooterSectionBadgesComp from '../../views/components/cartridges/footer-section-badges/index';
// import FooterSectionSubscribeComp from '../../views/components/cartridges/footer-section-subscribe/index';
// import FooterSectionLinksComp from '../../views/components/cartridges/footer-section-links/index';
// import FooterBadgeComp from '../../views/components/cartridges/footer-badge/index';
// import FooterSocialLinkComp from '../../views/components/cartridges/footer-social-link/index';
// import FooterLinksSectionComp from '../../views/components/cartridges/footer-links-section/index';
// import FooterLinkComp from '../../views/components/cartridges/footer-link/index';
// import DynamicFormComp from '../../views/components/cartridges/dynamic-form/index';
// import OneColumnPageComp from '../../views/components/cartridges/one-column-page/index';
// import HomePageInnerWrapperComp from '../../views/components/cartridges/home-page-inner-wrapper/index';
// import HomePageMainSliderComp from '../../views/components/cartridges/home-page-main-slider/index';
// import HomePageMainSlideComp from '../../views/components/cartridges/home-page-main-slide/index';
// import HomePageDoctorsSliderComp from '../../views/components/cartridges/home-page-doctors-slider/index';
// import HomePageFeaturedSectionsComp from '../../views/components/cartridges/home-page-featured-sections/index';
// import HomePageFeaturedSectionComp from '../../views/components/cartridges/home-page-featured-section/index';
// import MainRecordSpotlightComp from '../../views/components/cartridges/main-record-spotlight/index';
// import MainProductSpotlightComp from '../../views/components/cartridges/main-product-spotlight/index';
// import ProductSpotlightComp from '../../views/components/cartridges/product-spotlight/index';
// import HomePageRecentArticlesComp from '../../views/components/cartridges/home-page-recent-articles/index';
// import RecordProductComp from '../../views/components/cartridges/record-product/index';
// import MainRichTextComp from '../../views/components/cartridges/main-rich-text/index';
// import InsertableCollectionComp from '../../views/components/cartridges/insertable-collection/index';

let stateList = {
    app: app,
    header: header,
    footer: footer,
    login: login,
    homepage: homepage,
    cart: cart,
    pdp: pdp
};

// let componentList = {
//     ContentSlot: ContentSlotComp,
//     Header: HeaderComp,
//     HeaderSectionUtility: HeaderSectionUtilityComp,
//     HeaderSectionMain: HeaderSectionMainComp,
//     HeaderSectionNavigationBCC: HeaderSectionNavigationBCCComp,
//     HeaderUtilityPromo: HeaderUtilityPromoComp,
//     HeaderUtilityLink: HeaderUtilityLinkComp,
//     HeaderMainLogo: HeaderMainLogoComp,
//     HeaderMainMinicart: HeaderMainMinicartComp,
//     HeaderMainSignIn: HeaderMainSignInComp,
//     HeaderMainSearch: HeaderMainSearchComp,
//     HeaderUtilityLinkModal: HeaderUtilityLinkModalComp,
//     HeaderNavigationUtility: HeaderNavigationUtilityComp,
//     simpleNavigationElement: SimpleNavigationElementComp,
//     HeaderNavigationUtilityLink: HeaderNavigationUtilityLinkComp,
//     HeaderNavigationUtilityLinkModal: HeaderNavigationUtilityLinkModalComp,
//     Footer: FooterComp,
//     FooterSectionBadges: FooterSectionBadgesComp,
//     FooterSectionSubscribe: FooterSectionSubscribeComp,
//     FooterSectionLinks: FooterSectionLinksComp,
//     FooterBadge: FooterBadgeComp,
//     FooterSocialLink: FooterSocialLinkComp,
//     FooterLinksSection: FooterLinksSectionComp,
//     FooterLink: FooterLinkComp,
//     dynamicForm: DynamicFormComp,
//     OneColumnPage: OneColumnPageComp,
//     HomepageInnerWrapper: HomePageInnerWrapperComp,
//     HomepageMainSlider: HomePageMainSliderComp,
//     HomepageMainSlide: HomePageMainSlideComp,
//     HomepageDoctorsSlider: HomePageDoctorsSliderComp,
//     HomepageFeaturedSections: HomePageFeaturedSectionsComp,
//     HomepageFeaturedSection: HomePageFeaturedSectionComp,
//     MainBestSeller: MainRecordSpotlightComp,
//     MainRecentlyViewed: MainProductSpotlightComp,
//     productSpotlight: ProductSpotlightComp,
//     HomepageRecentArticles: HomePageRecentArticlesComp,
//     recordProduct: RecordProductComp,
//     MainRichText: MainRichTextComp,
//     insertableCollection: InsertableCollectionComp
// }
//
//
// var myHighPriorityLoader = {
//     getConfig: function (name, callback) {
//         try{
//             callback({viewModel: componentList[name].model,template: componentList[name].template})
//         }catch(e){
//             console.error('component:', name, '-', e);
//         }
//     }
// }
//
// ko.components.loaders.unshift(myHighPriorityLoader);

export default class State {
    constructor(name, state){
        try {
            this.data = new stateList[name].model(state);
            this.html = stateList[name].template;
        }catch(e){
            console.error(name, e);
        }
    }
}


// for(let key in componentList){
//     ko.components.register(key, {
//         viewModel: componentList[key].model,
//         template: componentList[key].template
//     });
// }