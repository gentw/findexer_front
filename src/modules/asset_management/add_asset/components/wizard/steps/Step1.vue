<template>
    <div class="card add_asset_intro">
        <div class="card-header border-0">
            <h2 class="fw-bold m-0 d-flex align-items-center">Import Assets</h2>
        </div>

        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <router-link :to="'#'" class="btn btn-primary"><span class="svg-icon svg-icon-primary">
                        <img width="16" height="16" src="/media/icons/custom/plus_icon.svg">
                    </span> Connect to banks &amp; providers</router-link>
                </div>

                <div class="col-md-6 mt-4 mt-md-0">
                    <router-link :to="'test'" class="btn btn-primary"><span class="svg-icon svg-icon-primary ">
                        <img width="17" height="20" src="/media/icons/custom/import_icon.svg">
                    </span> Import CSV</router-link>
                </div>
            </div>
            
        </div>
    </div>

    <div class="card add_assets_manually mt-10">
        <div class="card-header border-0">
            <h2 class="fw-bold m-0 d-flex align-items-center">Add assets manually</h2>
        </div>

        <div class="card-body pt-3">
            <div id="submitForm" class="row">
                
                <div class="col-md-6">
                    <Field
                        type="radio"
                        class="btn-check"
                        name="assetType"
                        v-model="stepData.assetType"
                        :value="'Asset type 3'"
                        @change="onChange($event)"
                        id="kt_add_asset_form_asset_type_1"
                    />
                    <label
                        class="btn p-0"
                        for="kt_add_asset_form_asset_type_1" style="text-align: left">
                        <div class="card add_assets_manually__box">
                            <div class="card-body p-7">
                                <div class="d-flex align-items-center flex-row">
                                    <div class="add_assets_manually__box-icon d-flex justify-content-center align-items-center">
                                        <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M37.4464 10.7038C37.309 10.4262 37.4227 10.0898 37.7002 9.95239L47.7768 4.96462C48.0544 4.82722 48.3908 4.94086 48.5282 5.21844L53.516 15.2951C53.6534 15.5726 53.5398 15.909 53.2622 16.0464L43.1856 21.0342C42.908 21.1716 42.5716 21.058 42.4342 20.7804L37.4464 10.7038Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M34.6772 43.4788C34.6772 43.169 34.9283 42.918 35.238 42.918H46.4815C46.7913 42.918 47.0423 43.169 47.0423 43.4788V54.7223C47.0423 55.032 46.7913 55.2831 46.4815 55.2831H35.238C34.9283 55.2831 34.6772 55.032 34.6772 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M34.6772 28.0227C34.6772 27.713 34.9283 27.4619 35.238 27.4619H46.4815C46.7913 27.4619 47.0423 27.713 47.0423 28.0227V39.2662C47.0423 39.5759 46.7913 39.827 46.4815 39.827H35.238C34.9283 39.827 34.6772 39.5759 34.6772 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path d="M19.2213 43.4788C19.2213 43.169 19.4724 42.918 19.7821 42.918H31.0256C31.3353 42.918 31.5864 43.169 31.5864 43.4788V54.7223C31.5864 55.032 31.3353 55.2831 31.0256 55.2831H19.7821C19.4724 55.2831 19.2213 55.032 19.2213 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M19.2213 28.0227C19.2213 27.713 19.4724 27.4619 19.7821 27.4619H31.0256C31.3353 27.4619 31.5864 27.713 31.5864 28.0227V39.2662C31.5864 39.5759 31.3353 39.827 31.0256 39.827H19.7821C19.4724 39.827 19.2213 39.5759 19.2213 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M19.2213 12.5667C19.2213 12.2569 19.4724 12.0059 19.7821 12.0059H31.0256C31.3353 12.0059 31.5864 12.2569 31.5864 12.5667V23.8102C31.5864 24.1199 31.3353 24.3709 31.0256 24.3709H19.7821C19.4724 24.3709 19.2213 24.1199 19.2213 23.8101V12.5667Z" fill="#409FFF"/>
                                            <path d="M3.76477 43.4788C3.76477 43.169 4.01585 42.918 4.32557 42.918H15.5691C15.8788 42.918 16.1299 43.169 16.1299 43.4788V54.7223C16.1299 55.032 15.8788 55.2831 15.5691 55.2831H4.32557C4.01585 55.2831 3.76477 55.032 3.76477 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path d="M3.76477 28.0227C3.76477 27.713 4.01585 27.4619 4.32557 27.4619H15.5691C15.8788 27.4619 16.1299 27.713 16.1299 28.0227V39.2662C16.1299 39.5759 15.8788 39.827 15.5691 39.827H4.32557C4.01585 39.827 3.76477 39.5759 3.76477 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M3.76477 12.5667C3.76477 12.2569 4.01585 12.0059 4.32557 12.0059H15.5691C15.8788 12.0059 16.1299 12.2569 16.1299 12.5667V23.8102C16.1299 24.1199 15.8788 24.3709 15.5691 24.3709H4.32557C4.01585 24.3709 3.76477 24.1199 3.76477 23.8101V12.5667Z" fill="#409FFF"/>
                                        </svg>

                                    </div>
                                    <div class="add_assets_manually__box-content d-flex flex-column justify-content-center">
                                        <div><h3>Listed Stocks & Funds</h3></div>
                                        <div>
                                            <p class="m-0">
                                                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>

                <div class="col-md-6">
                    <Field
                        type="radio"
                        class="btn-check"
                        name="assetType"
                        value="Asset type 4"
                        v-model="stepData.assetType"
                        @change="onChange($event)"
                        id="kt_add_asset_form_asset_type_2"
                    />
                    <label
                        class="btn p-0"
                        for="kt_add_asset_form_asset_type_2" style="text-align: left">
                        <div class="card add_assets_manually__box">
                            <div class="card-body p-7">
                                <div class="d-flex align-items-center flex-row">
                                    <div class="add_assets_manually__box-icon d-flex justify-content-center align-items-center">
                                        <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M37.4464 10.7038C37.309 10.4262 37.4227 10.0898 37.7002 9.95239L47.7768 4.96462C48.0544 4.82722 48.3908 4.94086 48.5282 5.21844L53.516 15.2951C53.6534 15.5726 53.5398 15.909 53.2622 16.0464L43.1856 21.0342C42.908 21.1716 42.5716 21.058 42.4342 20.7804L37.4464 10.7038Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M34.6772 43.4788C34.6772 43.169 34.9283 42.918 35.238 42.918H46.4815C46.7913 42.918 47.0423 43.169 47.0423 43.4788V54.7223C47.0423 55.032 46.7913 55.2831 46.4815 55.2831H35.238C34.9283 55.2831 34.6772 55.032 34.6772 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M34.6772 28.0227C34.6772 27.713 34.9283 27.4619 35.238 27.4619H46.4815C46.7913 27.4619 47.0423 27.713 47.0423 28.0227V39.2662C47.0423 39.5759 46.7913 39.827 46.4815 39.827H35.238C34.9283 39.827 34.6772 39.5759 34.6772 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path d="M19.2213 43.4788C19.2213 43.169 19.4724 42.918 19.7821 42.918H31.0256C31.3353 42.918 31.5864 43.169 31.5864 43.4788V54.7223C31.5864 55.032 31.3353 55.2831 31.0256 55.2831H19.7821C19.4724 55.2831 19.2213 55.032 19.2213 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M19.2213 28.0227C19.2213 27.713 19.4724 27.4619 19.7821 27.4619H31.0256C31.3353 27.4619 31.5864 27.713 31.5864 28.0227V39.2662C31.5864 39.5759 31.3353 39.827 31.0256 39.827H19.7821C19.4724 39.827 19.2213 39.5759 19.2213 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M19.2213 12.5667C19.2213 12.2569 19.4724 12.0059 19.7821 12.0059H31.0256C31.3353 12.0059 31.5864 12.2569 31.5864 12.5667V23.8102C31.5864 24.1199 31.3353 24.3709 31.0256 24.3709H19.7821C19.4724 24.3709 19.2213 24.1199 19.2213 23.8101V12.5667Z" fill="#409FFF"/>
                                            <path d="M3.76477 43.4788C3.76477 43.169 4.01585 42.918 4.32557 42.918H15.5691C15.8788 42.918 16.1299 43.169 16.1299 43.4788V54.7223C16.1299 55.032 15.8788 55.2831 15.5691 55.2831H4.32557C4.01585 55.2831 3.76477 55.032 3.76477 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path d="M3.76477 28.0227C3.76477 27.713 4.01585 27.4619 4.32557 27.4619H15.5691C15.8788 27.4619 16.1299 27.713 16.1299 28.0227V39.2662C16.1299 39.5759 15.8788 39.827 15.5691 39.827H4.32557C4.01585 39.827 3.76477 39.5759 3.76477 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M3.76477 12.5667C3.76477 12.2569 4.01585 12.0059 4.32557 12.0059H15.5691C15.8788 12.0059 16.1299 12.2569 16.1299 12.5667V23.8102C16.1299 24.1199 15.8788 24.3709 15.5691 24.3709H4.32557C4.01585 24.3709 3.76477 24.1199 3.76477 23.8101V12.5667Z" fill="#409FFF"/>
                                        </svg>

                                    </div>
                                    <div class="add_assets_manually__box-content d-flex flex-column justify-content-center">
                                        <div><h3>Listed Stocks & Funds</h3></div>
                                        <div>
                                            <p class="m-0">
                                                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>

                <div class="col-md-6">
                    <Field
                        type="radio"
                        class="btn-check"
                        name="assetType"
                        value="Asset type 5"
                        v-model="stepData.assetType"
                        @change="onChange($event)"
                        id="kt_add_asset_form_asset_type_3"
                    />
                    <label
                        class="btn p-0"
                        for="kt_add_asset_form_asset_type_3" style="text-align: left">
                        <div class="card add_assets_manually__box">
                            <div class="card-body p-7">
                                <div class="d-flex align-items-center flex-row">
                                    <div class="add_assets_manually__box-icon d-flex justify-content-center align-items-center">
                                        <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M37.4464 10.7038C37.309 10.4262 37.4227 10.0898 37.7002 9.95239L47.7768 4.96462C48.0544 4.82722 48.3908 4.94086 48.5282 5.21844L53.516 15.2951C53.6534 15.5726 53.5398 15.909 53.2622 16.0464L43.1856 21.0342C42.908 21.1716 42.5716 21.058 42.4342 20.7804L37.4464 10.7038Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M34.6772 43.4788C34.6772 43.169 34.9283 42.918 35.238 42.918H46.4815C46.7913 42.918 47.0423 43.169 47.0423 43.4788V54.7223C47.0423 55.032 46.7913 55.2831 46.4815 55.2831H35.238C34.9283 55.2831 34.6772 55.032 34.6772 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M34.6772 28.0227C34.6772 27.713 34.9283 27.4619 35.238 27.4619H46.4815C46.7913 27.4619 47.0423 27.713 47.0423 28.0227V39.2662C47.0423 39.5759 46.7913 39.827 46.4815 39.827H35.238C34.9283 39.827 34.6772 39.5759 34.6772 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path d="M19.2213 43.4788C19.2213 43.169 19.4724 42.918 19.7821 42.918H31.0256C31.3353 42.918 31.5864 43.169 31.5864 43.4788V54.7223C31.5864 55.032 31.3353 55.2831 31.0256 55.2831H19.7821C19.4724 55.2831 19.2213 55.032 19.2213 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M19.2213 28.0227C19.2213 27.713 19.4724 27.4619 19.7821 27.4619H31.0256C31.3353 27.4619 31.5864 27.713 31.5864 28.0227V39.2662C31.5864 39.5759 31.3353 39.827 31.0256 39.827H19.7821C19.4724 39.827 19.2213 39.5759 19.2213 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M19.2213 12.5667C19.2213 12.2569 19.4724 12.0059 19.7821 12.0059H31.0256C31.3353 12.0059 31.5864 12.2569 31.5864 12.5667V23.8102C31.5864 24.1199 31.3353 24.3709 31.0256 24.3709H19.7821C19.4724 24.3709 19.2213 24.1199 19.2213 23.8101V12.5667Z" fill="#409FFF"/>
                                            <path d="M3.76477 43.4788C3.76477 43.169 4.01585 42.918 4.32557 42.918H15.5691C15.8788 42.918 16.1299 43.169 16.1299 43.4788V54.7223C16.1299 55.032 15.8788 55.2831 15.5691 55.2831H4.32557C4.01585 55.2831 3.76477 55.032 3.76477 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path d="M3.76477 28.0227C3.76477 27.713 4.01585 27.4619 4.32557 27.4619H15.5691C15.8788 27.4619 16.1299 27.713 16.1299 28.0227V39.2662C16.1299 39.5759 15.8788 39.827 15.5691 39.827H4.32557C4.01585 39.827 3.76477 39.5759 3.76477 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M3.76477 12.5667C3.76477 12.2569 4.01585 12.0059 4.32557 12.0059H15.5691C15.8788 12.0059 16.1299 12.2569 16.1299 12.5667V23.8102C16.1299 24.1199 15.8788 24.3709 15.5691 24.3709H4.32557C4.01585 24.3709 3.76477 24.1199 3.76477 23.8101V12.5667Z" fill="#409FFF"/>
                                        </svg>

                                    </div>
                                    <div class="add_assets_manually__box-content d-flex flex-column justify-content-center">
                                        <div><h3>Listed Stocks & Funds</h3></div>
                                        <div>
                                            <p class="m-0">
                                                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>

                <div class="col-md-6">
                    <Field
                        type="radio"
                        class="btn-check"
                        name="assetType"
                        v-model="stepData.assetType"
                        @change="onChange($event)"
                        id="kt_add_asset_form_asset_type_4"
                    />
                    <label
                        class="btn p-0"
                        for="kt_add_asset_form_asset_type_4" style="text-align: left">
                        <div class="card add_assets_manually__box">
                            <div class="card-body p-7">
                                <div class="d-flex align-items-center flex-row">
                                    <div class="add_assets_manually__box-icon d-flex justify-content-center align-items-center">
                                        <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M37.4464 10.7038C37.309 10.4262 37.4227 10.0898 37.7002 9.95239L47.7768 4.96462C48.0544 4.82722 48.3908 4.94086 48.5282 5.21844L53.516 15.2951C53.6534 15.5726 53.5398 15.909 53.2622 16.0464L43.1856 21.0342C42.908 21.1716 42.5716 21.058 42.4342 20.7804L37.4464 10.7038Z" fill="#409FFF"/>
                                            <path d="M19.2213 43.4788C19.2213 43.169 19.4724 42.918 19.7821 42.918H31.0256C31.3353 42.918 31.5864 43.169 31.5864 43.4788V54.7223C31.5864 55.032 31.3353 55.2831 31.0256 55.2831H19.7821C19.4724 55.2831 19.2213 55.032 19.2213 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M19.2213 28.0227C19.2213 27.713 19.4724 27.4619 19.7821 27.4619H31.0256C31.3353 27.4619 31.5864 27.713 31.5864 28.0227V39.2662C31.5864 39.5759 31.3353 39.827 31.0256 39.827H19.7821C19.4724 39.827 19.2213 39.5759 19.2213 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M19.2213 12.5667C19.2213 12.2569 19.4724 12.0059 19.7821 12.0059H31.0256C31.3353 12.0059 31.5864 12.2569 31.5864 12.5667V23.8102C31.5864 24.1199 31.3353 24.3709 31.0256 24.3709H19.7821C19.4724 24.3709 19.2213 24.1199 19.2213 23.8101V12.5667Z" fill="#409FFF"/>
                                            <path d="M3.76477 43.4788C3.76477 43.169 4.01585 42.918 4.32557 42.918H15.5691C15.8788 42.918 16.1299 43.169 16.1299 43.4788V54.7223C16.1299 55.032 15.8788 55.2831 15.5691 55.2831H4.32557C4.01585 55.2831 3.76477 55.032 3.76477 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path d="M3.76477 28.0227C3.76477 27.713 4.01585 27.4619 4.32557 27.4619H15.5691C15.8788 27.4619 16.1299 27.713 16.1299 28.0227V39.2662C16.1299 39.5759 15.8788 39.827 15.5691 39.827H4.32557C4.01585 39.827 3.76477 39.5759 3.76477 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M3.76477 12.5667C3.76477 12.2569 4.01585 12.0059 4.32557 12.0059H15.5691C15.8788 12.0059 16.1299 12.2569 16.1299 12.5667V23.8102C16.1299 24.1199 15.8788 24.3709 15.5691 24.3709H4.32557C4.01585 24.3709 3.76477 24.1199 3.76477 23.8101V12.5667Z" fill="#409FFF"/>
                                        </svg>

                                    </div>
                                    <div class="add_assets_manually__box-content d-flex flex-column justify-content-center">
                                        <div><h3>Listed Stocks & Funds</h3></div>
                                        <div>
                                            <p class="m-0">
                                                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>

                <div class="col-md-6">
                    <Field
                        type="radio"
                        class="btn-check"
                        name="assetType"
                        id="kt_add_asset_form_asset_type_5"
                        v-model="stepData.assetType"
                        @change="onChange($event)"
                    />
                    <label
                        class="btn p-0"
                        for="kt_add_asset_form_asset_type_5" style="text-align: left">
                        <div class="card add_assets_manually__box">
                            <div class="card-body p-7">
                                <div class="d-flex align-items-center flex-row">
                                    <div class="add_assets_manually__box-icon d-flex justify-content-center align-items-center">
                                        <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M37.4464 10.7038C37.309 10.4262 37.4227 10.0898 37.7002 9.95239L47.7768 4.96462C48.0544 4.82722 48.3908 4.94086 48.5282 5.21844L53.516 15.2951C53.6534 15.5726 53.5398 15.909 53.2622 16.0464L43.1856 21.0342C42.908 21.1716 42.5716 21.058 42.4342 20.7804L37.4464 10.7038Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M34.6772 43.4788C34.6772 43.169 34.9283 42.918 35.238 42.918H46.4815C46.7913 42.918 47.0423 43.169 47.0423 43.4788V54.7223C47.0423 55.032 46.7913 55.2831 46.4815 55.2831H35.238C34.9283 55.2831 34.6772 55.032 34.6772 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M34.6772 28.0227C34.6772 27.713 34.9283 27.4619 35.238 27.4619H46.4815C46.7913 27.4619 47.0423 27.713 47.0423 28.0227V39.2662C47.0423 39.5759 46.7913 39.827 46.4815 39.827H35.238C34.9283 39.827 34.6772 39.5759 34.6772 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path d="M19.2213 43.4788C19.2213 43.169 19.4724 42.918 19.7821 42.918H31.0256C31.3353 42.918 31.5864 43.169 31.5864 43.4788V54.7223C31.5864 55.032 31.3353 55.2831 31.0256 55.2831H19.7821C19.4724 55.2831 19.2213 55.032 19.2213 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M19.2213 28.0227C19.2213 27.713 19.4724 27.4619 19.7821 27.4619H31.0256C31.3353 27.4619 31.5864 27.713 31.5864 28.0227V39.2662C31.5864 39.5759 31.3353 39.827 31.0256 39.827H19.7821C19.4724 39.827 19.2213 39.5759 19.2213 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M19.2213 12.5667C19.2213 12.2569 19.4724 12.0059 19.7821 12.0059H31.0256C31.3353 12.0059 31.5864 12.2569 31.5864 12.5667V23.8102C31.5864 24.1199 31.3353 24.3709 31.0256 24.3709H19.7821C19.4724 24.3709 19.2213 24.1199 19.2213 23.8101V12.5667Z" fill="#409FFF"/>
                                            <path d="M3.76477 43.4788C3.76477 43.169 4.01585 42.918 4.32557 42.918H15.5691C15.8788 42.918 16.1299 43.169 16.1299 43.4788V54.7223C16.1299 55.032 15.8788 55.2831 15.5691 55.2831H4.32557C4.01585 55.2831 3.76477 55.032 3.76477 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path d="M3.76477 28.0227C3.76477 27.713 4.01585 27.4619 4.32557 27.4619H15.5691C15.8788 27.4619 16.1299 27.713 16.1299 28.0227V39.2662C16.1299 39.5759 15.8788 39.827 15.5691 39.827H4.32557C4.01585 39.827 3.76477 39.5759 3.76477 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M3.76477 12.5667C3.76477 12.2569 4.01585 12.0059 4.32557 12.0059H15.5691C15.8788 12.0059 16.1299 12.2569 16.1299 12.5667V23.8102C16.1299 24.1199 15.8788 24.3709 15.5691 24.3709H4.32557C4.01585 24.3709 3.76477 24.1199 3.76477 23.8101V12.5667Z" fill="#409FFF"/>
                                        </svg>

                                    </div>
                                    <div class="add_assets_manually__box-content d-flex flex-column justify-content-center">
                                        <div><h3>Listed Stocks & Funds</h3></div>
                                        <div>
                                            <p class="m-0">
                                                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>

                <div class="col-md-6">
                    <Field
                        type="radio"
                        class="btn-check"
                        name="assetType"
                        @change="onChange($event)"
                        v-model="stepData.assetType"
                        id="kt_add_asset_form_asset_type_6"
                    />
                    <label
                        class="btn p-0"
                        for="kt_add_asset_form_asset_type_6" style="text-align: left">
                        <div class="card add_assets_manually__box">
                            <div class="card-body p-7">
                                <div class="d-flex align-items-center flex-row">
                                    <div class="add_assets_manually__box-icon d-flex justify-content-center align-items-center">
                                        <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M37.4464 10.7038C37.309 10.4262 37.4227 10.0898 37.7002 9.95239L47.7768 4.96462C48.0544 4.82722 48.3908 4.94086 48.5282 5.21844L53.516 15.2951C53.6534 15.5726 53.5398 15.909 53.2622 16.0464L43.1856 21.0342C42.908 21.1716 42.5716 21.058 42.4342 20.7804L37.4464 10.7038Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M34.6772 43.4788C34.6772 43.169 34.9283 42.918 35.238 42.918H46.4815C46.7913 42.918 47.0423 43.169 47.0423 43.4788V54.7223C47.0423 55.032 46.7913 55.2831 46.4815 55.2831H35.238C34.9283 55.2831 34.6772 55.032 34.6772 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M34.6772 28.0227C34.6772 27.713 34.9283 27.4619 35.238 27.4619H46.4815C46.7913 27.4619 47.0423 27.713 47.0423 28.0227V39.2662C47.0423 39.5759 46.7913 39.827 46.4815 39.827H35.238C34.9283 39.827 34.6772 39.5759 34.6772 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path d="M19.2213 43.4788C19.2213 43.169 19.4724 42.918 19.7821 42.918H31.0256C31.3353 42.918 31.5864 43.169 31.5864 43.4788V54.7223C31.5864 55.032 31.3353 55.2831 31.0256 55.2831H19.7821C19.4724 55.2831 19.2213 55.032 19.2213 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M19.2213 28.0227C19.2213 27.713 19.4724 27.4619 19.7821 27.4619H31.0256C31.3353 27.4619 31.5864 27.713 31.5864 28.0227V39.2662C31.5864 39.5759 31.3353 39.827 31.0256 39.827H19.7821C19.4724 39.827 19.2213 39.5759 19.2213 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M19.2213 12.5667C19.2213 12.2569 19.4724 12.0059 19.7821 12.0059H31.0256C31.3353 12.0059 31.5864 12.2569 31.5864 12.5667V23.8102C31.5864 24.1199 31.3353 24.3709 31.0256 24.3709H19.7821C19.4724 24.3709 19.2213 24.1199 19.2213 23.8101V12.5667Z" fill="#409FFF"/>
                                            <path d="M3.76477 43.4788C3.76477 43.169 4.01585 42.918 4.32557 42.918H15.5691C15.8788 42.918 16.1299 43.169 16.1299 43.4788V54.7223C16.1299 55.032 15.8788 55.2831 15.5691 55.2831H4.32557C4.01585 55.2831 3.76477 55.032 3.76477 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path d="M3.76477 28.0227C3.76477 27.713 4.01585 27.4619 4.32557 27.4619H15.5691C15.8788 27.4619 16.1299 27.713 16.1299 28.0227V39.2662C16.1299 39.5759 15.8788 39.827 15.5691 39.827H4.32557C4.01585 39.827 3.76477 39.5759 3.76477 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M3.76477 12.5667C3.76477 12.2569 4.01585 12.0059 4.32557 12.0059H15.5691C15.8788 12.0059 16.1299 12.2569 16.1299 12.5667V23.8102C16.1299 24.1199 15.8788 24.3709 15.5691 24.3709H4.32557C4.01585 24.3709 3.76477 24.1199 3.76477 23.8101V12.5667Z" fill="#409FFF"/>
                                        </svg>

                                    </div>
                                    <div class="add_assets_manually__box-content d-flex flex-column justify-content-center">
                                        <div><h3>Listed Stocks & Funds</h3></div>
                                        <div>
                                            <p class="m-0">
                                                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>

                <div class="col-md-6">
                    <Field
                        type="radio"
                        class="btn-check"
                        name="assetType"
                        @change="onChange($event)"
                        v-model="stepData.assetType"
                        id="kt_add_asset_form_asset_type_7"
                    />
                    <label
                        class="btn p-0"
                        for="kt_add_asset_form_asset_type_7" style="text-align: left">
                        <div class="card add_assets_manually__box">
                            <div class="card-body p-7">
                                <div class="d-flex align-items-center flex-row">
                                    <div class="add_assets_manually__box-icon d-flex justify-content-center align-items-center">
                                        <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M37.4464 10.7038C37.309 10.4262 37.4227 10.0898 37.7002 9.95239L47.7768 4.96462C48.0544 4.82722 48.3908 4.94086 48.5282 5.21844L53.516 15.2951C53.6534 15.5726 53.5398 15.909 53.2622 16.0464L43.1856 21.0342C42.908 21.1716 42.5716 21.058 42.4342 20.7804L37.4464 10.7038Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M34.6772 43.4788C34.6772 43.169 34.9283 42.918 35.238 42.918H46.4815C46.7913 42.918 47.0423 43.169 47.0423 43.4788V54.7223C47.0423 55.032 46.7913 55.2831 46.4815 55.2831H35.238C34.9283 55.2831 34.6772 55.032 34.6772 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M34.6772 28.0227C34.6772 27.713 34.9283 27.4619 35.238 27.4619H46.4815C46.7913 27.4619 47.0423 27.713 47.0423 28.0227V39.2662C47.0423 39.5759 46.7913 39.827 46.4815 39.827H35.238C34.9283 39.827 34.6772 39.5759 34.6772 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path d="M19.2213 43.4788C19.2213 43.169 19.4724 42.918 19.7821 42.918H31.0256C31.3353 42.918 31.5864 43.169 31.5864 43.4788V54.7223C31.5864 55.032 31.3353 55.2831 31.0256 55.2831H19.7821C19.4724 55.2831 19.2213 55.032 19.2213 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M19.2213 28.0227C19.2213 27.713 19.4724 27.4619 19.7821 27.4619H31.0256C31.3353 27.4619 31.5864 27.713 31.5864 28.0227V39.2662C31.5864 39.5759 31.3353 39.827 31.0256 39.827H19.7821C19.4724 39.827 19.2213 39.5759 19.2213 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M19.2213 12.5667C19.2213 12.2569 19.4724 12.0059 19.7821 12.0059H31.0256C31.3353 12.0059 31.5864 12.2569 31.5864 12.5667V23.8102C31.5864 24.1199 31.3353 24.3709 31.0256 24.3709H19.7821C19.4724 24.3709 19.2213 24.1199 19.2213 23.8101V12.5667Z" fill="#409FFF"/>
                                            <path d="M3.76477 43.4788C3.76477 43.169 4.01585 42.918 4.32557 42.918H15.5691C15.8788 42.918 16.1299 43.169 16.1299 43.4788V54.7223C16.1299 55.032 15.8788 55.2831 15.5691 55.2831H4.32557C4.01585 55.2831 3.76477 55.032 3.76477 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path d="M3.76477 28.0227C3.76477 27.713 4.01585 27.4619 4.32557 27.4619H15.5691C15.8788 27.4619 16.1299 27.713 16.1299 28.0227V39.2662C16.1299 39.5759 15.8788 39.827 15.5691 39.827H4.32557C4.01585 39.827 3.76477 39.5759 3.76477 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M3.76477 12.5667C3.76477 12.2569 4.01585 12.0059 4.32557 12.0059H15.5691C15.8788 12.0059 16.1299 12.2569 16.1299 12.5667V23.8102C16.1299 24.1199 15.8788 24.3709 15.5691 24.3709H4.32557C4.01585 24.3709 3.76477 24.1199 3.76477 23.8101V12.5667Z" fill="#409FFF"/>
                                        </svg>

                                    </div>
                                    <div class="add_assets_manually__box-content d-flex flex-column justify-content-center">
                                        <div><h3>Listed Stocks & Funds</h3></div>
                                        <div>
                                            <p class="m-0">
                                                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>

                <div class="col-md-6">
                    <Field
                        type="radio"
                        class="btn-check"
                        name="assetType"
                        @change="onChange($event)"
                        v-model="stepData.assetType"
                        id="kt_add_asset_form_asset_type_8"
                        />
                    <label
                        class="btn p-0"
                        for="kt_add_asset_form_asset_type_8" style="text-align: left">
                        <div class="card add_assets_manually__box">
                            <div class="card-body p-7">
                                <div class="d-flex align-items-center flex-row">
                                    <div class="add_assets_manually__box-icon d-flex justify-content-center align-items-center">
                                        <svg width="58" height="60" viewBox="0 0 58 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.7" d="M37.4464 10.7038C37.309 10.4262 37.4227 10.0898 37.7002 9.95239L47.7768 4.96462C48.0544 4.82722 48.3908 4.94086 48.5282 5.21844L53.516 15.2951C53.6534 15.5726 53.5398 15.909 53.2622 16.0464L43.1856 21.0342C42.908 21.1716 42.5716 21.058 42.4342 20.7804L37.4464 10.7038Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M34.6772 43.4788C34.6772 43.169 34.9283 42.918 35.238 42.918H46.4815C46.7913 42.918 47.0423 43.169 47.0423 43.4788V54.7223C47.0423 55.032 46.7913 55.2831 46.4815 55.2831H35.238C34.9283 55.2831 34.6772 55.032 34.6772 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M34.6772 28.0227C34.6772 27.713 34.9283 27.4619 35.238 27.4619H46.4815C46.7913 27.4619 47.0423 27.713 47.0423 28.0227V39.2662C47.0423 39.5759 46.7913 39.827 46.4815 39.827H35.238C34.9283 39.827 34.6772 39.5759 34.6772 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path d="M19.2213 43.4788C19.2213 43.169 19.4724 42.918 19.7821 42.918H31.0256C31.3353 42.918 31.5864 43.169 31.5864 43.4788V54.7223C31.5864 55.032 31.3353 55.2831 31.0256 55.2831H19.7821C19.4724 55.2831 19.2213 55.032 19.2213 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M19.2213 28.0227C19.2213 27.713 19.4724 27.4619 19.7821 27.4619H31.0256C31.3353 27.4619 31.5864 27.713 31.5864 28.0227V39.2662C31.5864 39.5759 31.3353 39.827 31.0256 39.827H19.7821C19.4724 39.827 19.2213 39.5759 19.2213 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.7" d="M19.2213 12.5667C19.2213 12.2569 19.4724 12.0059 19.7821 12.0059H31.0256C31.3353 12.0059 31.5864 12.2569 31.5864 12.5667V23.8102C31.5864 24.1199 31.3353 24.3709 31.0256 24.3709H19.7821C19.4724 24.3709 19.2213 24.1199 19.2213 23.8101V12.5667Z" fill="#409FFF"/>
                                            <path d="M3.76477 43.4788C3.76477 43.169 4.01585 42.918 4.32557 42.918H15.5691C15.8788 42.918 16.1299 43.169 16.1299 43.4788V54.7223C16.1299 55.032 15.8788 55.2831 15.5691 55.2831H4.32557C4.01585 55.2831 3.76477 55.032 3.76477 54.7223V43.4788Z" fill="#409FFF"/>
                                            <path d="M3.76477 28.0227C3.76477 27.713 4.01585 27.4619 4.32557 27.4619H15.5691C15.8788 27.4619 16.1299 27.713 16.1299 28.0227V39.2662C16.1299 39.5759 15.8788 39.827 15.5691 39.827H4.32557C4.01585 39.827 3.76477 39.5759 3.76477 39.2662V28.0227Z" fill="#409FFF"/>
                                            <path opacity="0.3" d="M3.76477 12.5667C3.76477 12.2569 4.01585 12.0059 4.32557 12.0059H15.5691C15.8788 12.0059 16.1299 12.2569 16.1299 12.5667V23.8102C16.1299 24.1199 15.8788 24.3709 15.5691 24.3709H4.32557C4.01585 24.3709 3.76477 24.1199 3.76477 23.8101V12.5667Z" fill="#409FFF"/>
                                        </svg>

                                    </div>
                                    <div class="add_assets_manually__box-content d-flex flex-column justify-content-center">
                                        <div><h3>Listed Stocks & Funds</h3></div>
                                        <div>
                                            <p class="m-0">
                                                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, defineEmits, onMounted, ref, getCurrentInstance, computed } from "vue";
  import { Form, Field, ErrorMessage } from "vee-validate";
  import { useStore } from "vuex";
  import { Actions, Getters, Mutations } from "@/modules/asset_management/store/StoreEnums";
  
  export default defineComponent({
    name: "assets",
    components: {
        Field,
        Form
    },
    setup(props, context) {
        const store = useStore();
        const emitName = 'next-step';
        defineEmits<{(e: typeof emitName, type: string): void }>();

        const stepData = computed(() => store.state.asset_management.formDataStep1);

        const onChange = (event) => {
            context.emit('next-step', event.target.value);
        }

        onMounted(() => {
        });

        return {
            onChange, stepData
        }


    },
  });
  </script>
  