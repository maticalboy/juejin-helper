const env = process.env || {
    COOKIE: "ttwid=1%7Cb6aBqMrQSO-vkCNKzLX9K3-5GYhAfudsFzXehP5R1so%7C1710488855%7Cd32f3edb594ef2571e291290447628053092b5bbdf1b6baca6b9d8bf78e11e0b; ttcid=eae82c7b61bd45ae88b2cc43e16e5f7210; tt_scid=M3yqsWJpYy4i7n6.pQ8naV88FuzHxccEnUnXBvPOANux94aj.uxB3dsHbCIarlb0238a; msToken=urNQ9V2AGN_DkAKE2ByS-V604K6OWSIW71JTCX6mtT5v1Kmc64r74cRmfAMu1HcKE7QiylzCtEfyuhxDAgW6Lmmy7bda-eXsQEAmGjgmEhLdxOjsqxl_kTA-Hw21y1Q="
};

module.exports = {
    /* 掘金Cookie */
    COOKIE: "__tea_cookie_tokens_2608=%257B%2522user_unique_id%2522%253A%25227330554088142194239%2522%252C%2522web_id%2522%253A%25227330554088142194239%2522%252C%2522timestamp%2522%253A1741333093262%257D; _tea_utm_cache_2608={%22utm_source%22:%22course_list%22}; passport_csrf_token=c89789bce3249241ad852ef3cd1ecf50; passport_csrf_token_default=c89789bce3249241ad852ef3cd1ecf50; n_mh=w8JPzD7fST7_GYhHuZCvxKhUK-u90FdWMazBPWPihxM; passport_auth_status=1214b463a3b7cc5d59462a4d5a1d2823%2C; passport_auth_status_ss=1214b463a3b7cc5d59462a4d5a1d2823%2C; sid_guard=8e8af176671b180d3f394c6f6cf7e6a9%7C1770254453%7C31536000%7CFri%2C+05-Feb-2027+01%3A20%3A53+GMT; uid_tt=1e742481ab20af6f42348a64160a1dab; uid_tt_ss=1e742481ab20af6f42348a64160a1dab; sid_tt=8e8af176671b180d3f394c6f6cf7e6a9; sessionid=8e8af176671b180d3f394c6f6cf7e6a9; sessionid_ss=8e8af176671b180d3f394c6f6cf7e6a9; session_tlb_tag=sttt%7C4%7CjorxdmcbGA0_OUxvbPfmqf________-ySzb0CgKHk43xFVIOwbcL8fZZmhZl7tguVGsGnEhQkys%3D; is_staff_user=false; sid_ucp_v1=1.0.0-KGU1NzU2ZjY2ZTBiMjk1NzBmZGJjNDg2YmZkNzYwYjg2Nzg1MjYyYTUKFwjNgODXhY2BBhD14I_MBhiwFDgCQPEHGgJscSIgOGU4YWYxNzY2NzFiMTgwZDNmMzk0YzZmNmNmN2U2YTk; ssid_ucp_v1=1.0.0-KGU1NzU2ZjY2ZTBiMjk1NzBmZGJjNDg2YmZkNzYwYjg2Nzg1MjYyYTUKFwjNgODXhY2BBhD14I_MBhiwFDgCQPEHGgJscSIgOGU4YWYxNzY2NzFiMTgwZDNmMzk0YzZmNmNmN2U2YTk; _tea_utm_cache_576092=undefined; csrf_session_id=4ef9eb53b2fcbc9bde75477aa6043e3f",
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
