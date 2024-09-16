const env = process.env || {
    COOKIE: "ttwid=1%7Cb6aBqMrQSO-vkCNKzLX9K3-5GYhAfudsFzXehP5R1so%7C1710488855%7Cd32f3edb594ef2571e291290447628053092b5bbdf1b6baca6b9d8bf78e11e0b; ttcid=eae82c7b61bd45ae88b2cc43e16e5f7210; tt_scid=M3yqsWJpYy4i7n6.pQ8naV88FuzHxccEnUnXBvPOANux94aj.uxB3dsHbCIarlb0238a; msToken=urNQ9V2AGN_DkAKE2ByS-V604K6OWSIW71JTCX6mtT5v1Kmc64r74cRmfAMu1HcKE7QiylzCtEfyuhxDAgW6Lmmy7bda-eXsQEAmGjgmEhLdxOjsqxl_kTA-Hw21y1Q="
};

module.exports = {
    /* 掘金Cookie */
    COOKIE: "_tea_utm_cache_2608=undefined; __tea_cookie_tokens_2608=%257B%2522user_unique_id%2522%253A%25227279764898463745573%2522%252C%2522web_id%2522%253A%25227279764898463745573%2522%252C%2522timestamp%2522%253A1695723619922%257D; sid_guard=54ed3e44f7b7354eb0068f9103889d1a%7C1710633037%7C31536000%7CSun%2C+16-Mar-2025+23%3A50%3A37+GMT; uid_tt=e1e6b0b07d58ee5e7c20d380aefa43c1; uid_tt_ss=e1e6b0b07d58ee5e7c20d380aefa43c1; sid_tt=54ed3e44f7b7354eb0068f9103889d1a; sessionid=54ed3e44f7b7354eb0068f9103889d1a; sessionid_ss=54ed3e44f7b7354eb0068f9103889d1a; sid_ucp_v1=1.0.0-KGVhNmY3NzI1ZDEzNmY0ZjM0OTZlNTU4MDdhZjIyYTNhN2MxZTU0ZWUKFwjNgODXhY2BBhDN4NivBhiwFDgCQPEHGgJsZiIgNTRlZDNlNDRmN2I3MzU0ZWIwMDY4ZjkxMDM4ODlkMWE; ssid_ucp_v1=1.0.0-KGVhNmY3NzI1ZDEzNmY0ZjM0OTZlNTU4MDdhZjIyYTNhN2MxZTU0ZWUKFwjNgODXhY2BBhDN4NivBhiwFDgCQPEHGgJsZiIgNTRlZDNlNDRmN2I3MzU0ZWIwMDY4ZjkxMDM4ODlkMWE; store-region=cn-he; store-region-src=uid; csrf_session_id=e2b42e9be4581500b62040d2febb46cb",
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
