'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">dea documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-95cc1881cf6ea5031a51bbfbbd4ace078b1b26b88cd2895a9f72bb178362230b4d7072c7241fa2c699a69d275913abd9215ad210af37f04fad8adbe480c9ab4f"' : 'data-target="#xs-components-links-module-AppModule-95cc1881cf6ea5031a51bbfbbd4ace078b1b26b88cd2895a9f72bb178362230b4d7072c7241fa2c699a69d275913abd9215ad210af37f04fad8adbe480c9ab4f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-95cc1881cf6ea5031a51bbfbbd4ace078b1b26b88cd2895a9f72bb178362230b4d7072c7241fa2c699a69d275913abd9215ad210af37f04fad8adbe480c9ab4f"' :
                                            'id="xs-components-links-module-AppModule-95cc1881cf6ea5031a51bbfbbd4ace078b1b26b88cd2895a9f72bb178362230b4d7072c7241fa2c699a69d275913abd9215ad210af37f04fad8adbe480c9ab4f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PuzzleGameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PuzzleGameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DeaModule.html" data-type="entity-link" >DeaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' : 'data-target="#xs-components-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' :
                                            'id="xs-components-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' }>
                                            <li class="link">
                                                <a href="components/CytoGraphComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CytoGraphComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' : 'data-target="#xs-injectables-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' :
                                        'id="xs-injectables-links-module-DeaModule-e5cd1f8a6753c72d970a9e8d9a8d23eaedc229d9d9b14af171f1df0fb95fb1e285d7dc1b2c4024377ed1683fed6bba7ceb04f3a9ef890c6089cc07e4f663dc35"' }>
                                        <li class="link">
                                            <a href="injectables/DeaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GrammarModule.html" data-type="entity-link" >GrammarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' : 'data-target="#xs-components-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' :
                                            'id="xs-components-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' }>
                                            <li class="link">
                                                <a href="components/GrammarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrammarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GrammarGraphComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrammarGraphComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' : 'data-target="#xs-injectables-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' :
                                        'id="xs-injectables-links-module-GrammarModule-836a74640efa43c67818521eabe5d6e8cfcb301e935640c3bb65fef8ca020a3e628bb4f3780f2abbaf345c530133b2ebac5a412dda8d0bb4f48493778cc9fb72"' }>
                                        <li class="link">
                                            <a href="injectables/GrammarGraphService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrammarGraphService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GrammarService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrammarService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PuzzleModule.html" data-type="entity-link" >PuzzleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PuzzleModule-df9c6111d47a791b73c7541c78e42836501ba967da8d360a704245b0e84f536e1f2e06522935c95ff2c00f5352caee831ee2ddd5fe7726d47b25954d187ed4a2"' : 'data-target="#xs-components-links-module-PuzzleModule-df9c6111d47a791b73c7541c78e42836501ba967da8d360a704245b0e84f536e1f2e06522935c95ff2c00f5352caee831ee2ddd5fe7726d47b25954d187ed4a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PuzzleModule-df9c6111d47a791b73c7541c78e42836501ba967da8d360a704245b0e84f536e1f2e06522935c95ff2c00f5352caee831ee2ddd5fe7726d47b25954d187ed4a2"' :
                                            'id="xs-components-links-module-PuzzleModule-df9c6111d47a791b73c7541c78e42836501ba967da8d360a704245b0e84f536e1f2e06522935c95ff2c00f5352caee831ee2ddd5fe7726d47b25954d187ed4a2"' }>
                                            <li class="link">
                                                <a href="components/PuzzleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PuzzleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StartGameModule.html" data-type="entity-link" >StartGameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' : 'data-target="#xs-components-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' :
                                            'id="xs-components-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' }>
                                            <li class="link">
                                                <a href="components/StartGameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartGameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' : 'data-target="#xs-injectables-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' :
                                        'id="xs-injectables-links-module-StartGameModule-b5c2990f31fc374be78751e277d9b53eceb600c5e2f9931e2481a0c2a397955301c909cfdf727d88b9208b0c12d1713acf5ea6de5e745112b179039de60189e4"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/MyCounterComponent.html" data-type="entity-link" >MyCounterComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DEAException.html" data-type="entity-link" >DEAException</a>
                            </li>
                            <li class="link">
                                <a href="classes/DemoForceDirectedLayout.html" data-type="entity-link" >DemoForceDirectedLayout</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExpressionGrammarModel.html" data-type="entity-link" >ExpressionGrammarModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RuleSetInterface.html" data-type="entity-link" >RuleSetInterface</a>
                            </li>
                            <li class="link">
                                <a href="classes/WordChecker.html" data-type="entity-link" >WordChecker</a>
                            </li>
                            <li class="link">
                                <a href="classes/WordGenerator.html" data-type="entity-link" >WordGenerator</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CytoGraphService.html" data-type="entity-link" >CytoGraphService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DeaArray.html" data-type="entity-link" >DeaArray</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeaLink.html" data-type="entity-link" >DeaLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeaNode.html" data-type="entity-link" >DeaNode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FourTuple.html" data-type="entity-link" >FourTuple</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GrammarModel.html" data-type="entity-link" >GrammarModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GrammarState.html" data-type="entity-link" >GrammarState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-2.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});