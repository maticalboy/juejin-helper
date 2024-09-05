const env = process.env || {
    COOKIE: "ttwid=1%7Cb6aBqMrQSO-vkCNKzLX9K3-5GYhAfudsFzXehP5R1so%7C1710488855%7Cd32f3edb594ef2571e291290447628053092b5bbdf1b6baca6b9d8bf78e11e0b; ttcid=eae82c7b61bd45ae88b2cc43e16e5f7210; tt_scid=M3yqsWJpYy4i7n6.pQ8naV88FuzHxccEnUnXBvPOANux94aj.uxB3dsHbCIarlb0238a; msToken=urNQ9V2AGN_DkAKE2ByS-V604K6OWSIW71JTCX6mtT5v1Kmc64r74cRmfAMu1HcKE7QiylzCtEfyuhxDAgW6Lmmy7bda-eXsQEAmGjgmEhLdxOjsqxl_kTA-Hw21y1Q="
};

module.exports = {
    /* 掘金Cookie */
    COOKIE: "_tea_utm_cache_2018={%22utm_source%22:%22web_icon%22}; _tea_utm_cache_576092=undefined; csrf_session_id=5a60c4edd36e0cacb9fe5cb2518216e9; _tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227411040612855924235%2522%252C%2522user_unique_id%2522%253A%25227411040612855924235%2522%252C%2522timestamp%2522%253A1725517377057%257D; passport_csrf_token=abf4e086edc86654987aad8326515012; passport_csrf_token_default=abf4e086edc86654987aad8326515012; passport_csrf_token_wap_state=5a0d3db03gAToVCgoVPZIGM5MGViNDdlYTRkMmY5ZTExZjNmMTMxNjgxZjA0ZWM3oU6-aHR0cHM6Ly9qdWVqaW4uY24vb2F1dGgtcmVzdWx0oVYBoUkAoUQAoUHRCjChTdEKMKFIqWp1ZWppbi5jbqFSBKJQTNEEFaZBQ1RJT06goUyyaHR0cHM6Ly9qdWVqaW4uY24voVTZIDhkNjk0NTRmYTI3ODMyM2JmMWEyNWM1NzRjZDFiZGJhoVcAoUYAolNBAKFVw6JNTMI%253D; n_mh=w8JPzD7fST7_GYhHuZCvxKhUK-u90FdWMazBPWPihxM; sid_guard=bf615cf91429e4297c369f65936e9a04%7C1725517515%7C31536000%7CFri%2C+05-Sep-2025+06%3A25%3A15+GMT; uid_tt=243bd44490428ad80943bbaf0f4d87f5; uid_tt_ss=243bd44490428ad80943bbaf0f4d87f5; sid_tt=bf615cf91429e4297c369f65936e9a04; sessionid=bf615cf91429e4297c369f65936e9a04; sessionid_ss=bf615cf91429e4297c369f65936e9a04; is_staff_user=false; sid_ucp_v1=1.0.0-KGUxZDFlZjgyNTAzYWQ5ZDE0ZjViOWE3ODQ3NWI4MTYwYjUzNmExYmYKFgjNgODXhY2BBhDLneW2BhiwFDgIQDgaAmxmIiBiZjYxNWNmOTE0MjllNDI5N2MzNjlmNjU5MzZlOWEwNA; ssid_ucp_v1=1.0.0-KGUxZDFlZjgyNTAzYWQ5ZDE0ZjViOWE3ODQ3NWI4MTYwYjUzNmExYmYKFgjNgODXhY2BBhDLneW2BhiwFDgIQDgaAmxmIiBiZjYxNWNmOTE0MjllNDI5N2MzNjlmNjU5MzZlOWEwNA; store-region=cn-he; store-region-src=uid; _ga=GA1.2.1939993731.1725517516; _gid=GA1.2.1479143494.1725517516; _ga_S695FMNGPJ=GS1.2.1725517516.1.0.1725517516.60.0.0",
    /* 多用户掘金Cookie, 当有1名以上用户时填写, 支持同时最多可配置5名用户 */
    COOKIE_2: env.COOKIE_2,
    COOKIE_3: env.COOKIE_3,
    COOKIE_4: env.COOKIE_4,
    COOKIE_5: env.COOKIE_5,
    /**
     * 邮箱配置
     * user 发件人邮箱, pass, 发件人密码, to收件人
     */
    EMAIL_USER: env.EMAIL_USER,
    EMAIL_PASS: env.EMAIL_PASS,
    EMAIL_TO: env.EMAIL_TO,
    /**
     * 钉钉配置
     * https://open.dingtalk.com/document/robots/custom-robot-access
     */
    DINGDING_WEBHOOK: env.DINGDING_WEBHOOK,
    /**
     * PushPlus配置
     * http://www.pushplus.plus/doc/guide/openApi.html
     */
    PUSHPLUS_TOKEN: env.PUSHPLUS_TOKEN,
    /**
     * 企业微信机器人配置
     * https://developer.work.weixin.qq.com/document/path/91770
     */
    WEIXIN_WEBHOOK: env.WEIXIN_WEBHOOK,
    /**
     * server酱推送key
     * https://sct.ftqq.com/sendkey
     */
    SERVERPUSHKEY: env.SERVERPUSHKEY,
    /**
     * 飞书配置
     */
    FEISHU_WEBHOOK: env.FEISHU_WEBHOOK
};
