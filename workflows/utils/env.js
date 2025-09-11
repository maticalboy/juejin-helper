const env = process.env || {
    COOKIE: "ttwid=1%7Cb6aBqMrQSO-vkCNKzLX9K3-5GYhAfudsFzXehP5R1so%7C1710488855%7Cd32f3edb594ef2571e291290447628053092b5bbdf1b6baca6b9d8bf78e11e0b; ttcid=eae82c7b61bd45ae88b2cc43e16e5f7210; tt_scid=M3yqsWJpYy4i7n6.pQ8naV88FuzHxccEnUnXBvPOANux94aj.uxB3dsHbCIarlb0238a; msToken=urNQ9V2AGN_DkAKE2ByS-V604K6OWSIW71JTCX6mtT5v1Kmc64r74cRmfAMu1HcKE7QiylzCtEfyuhxDAgW6Lmmy7bda-eXsQEAmGjgmEhLdxOjsqxl_kTA-Hw21y1Q="
};

module.exports = {
    /* 掘金Cookie */
    COOKIE: "store-region=cn-he; store-region-src=uid; sid_guard=b8f1c3c9932bf3ae1e32a5311c1ad6fc%7C1738714491%7C31536000%7CThu%2C+05-Feb-2026+00%3A14%3A51+GMT; uid_tt=3af62df403528ec73ea35fb29c0b5358; uid_tt_ss=3af62df403528ec73ea35fb29c0b5358; sid_tt=b8f1c3c9932bf3ae1e32a5311c1ad6fc; sessionid=b8f1c3c9932bf3ae1e32a5311c1ad6fc; sessionid_ss=b8f1c3c9932bf3ae1e32a5311c1ad6fc; is_staff_user=false; sid_ucp_v1=1.0.0-KDI0OWZiYmNiZjY1OTk2ZjU5YTg2NmZhNTE1YjBmYmVjZTczMDY5ZmQKFwjNgODXhY2BBhD72oq9BhiwFDgCQPEHGgJsZiIgYjhmMWMzYzk5MzJiZjNhZTFlMzJhNTMxMWMxYWQ2ZmM; ssid_ucp_v1=1.0.0-KDI0OWZiYmNiZjY1OTk2ZjU5YTg2NmZhNTE1YjBmYmVjZTczMDY5ZmQKFwjNgODXhY2BBhD72oq9BhiwFDgCQPEHGgJsZiIgYjhmMWMzYzk5MzJiZjNhZTFlMzJhNTMxMWMxYWQ2ZmM; __tea_cookie_tokens_2608=%257B%2522user_unique_id%2522%253A%25227330554088142194239%2522%252C%2522web_id%2522%253A%25227330554088142194239%2522%252C%2522timestamp%2522%253A1741333093262%257D; _tea_utm_cache_2608={%22utm_source%22:%22gold_browser_extension%22}; _tea_utm_cache_576092=undefined; csrf_session_id=4ef9eb53b2fcbc9bde75477aa6043e3f",
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
