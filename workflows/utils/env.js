const env = process.env || {
    COOKIE: "ttwid=1%7Cb6aBqMrQSO-vkCNKzLX9K3-5GYhAfudsFzXehP5R1so%7C1710488855%7Cd32f3edb594ef2571e291290447628053092b5bbdf1b6baca6b9d8bf78e11e0b; ttcid=eae82c7b61bd45ae88b2cc43e16e5f7210; tt_scid=M3yqsWJpYy4i7n6.pQ8naV88FuzHxccEnUnXBvPOANux94aj.uxB3dsHbCIarlb0238a; msToken=urNQ9V2AGN_DkAKE2ByS-V604K6OWSIW71JTCX6mtT5v1Kmc64r74cRmfAMu1HcKE7QiylzCtEfyuhxDAgW6Lmmy7bda-eXsQEAmGjgmEhLdxOjsqxl_kTA-Hw21y1Q="
};

module.exports = {
    /* 掘金Cookie */
    COOKIE: "__tea_cookie_tokens_2608=%257B%2522web_id%2522%253A%25227330554088142194239%2522%252C%2522user_unique_id%2522%253A%25227330554088142194239%2522%252C%2522timestamp%2522%253A1706777641152%257D;"+
	"sid_guard=25d28de6c90cacbfa4d607461555a16c%7C1706865901%7C31536000%7CSat%2C+01-Feb-2025+09%3A25%3A01+GMT;"+
	"uid_tt=ad944954752ea6d27773667e26b1c78a;"+
	"uid_tt_ss=ad944954752ea6d27773667e26b1c78a;"+
	"sid_tt=25d28de6c90cacbfa4d607461555a16c;"+
	"sessionid=25d28de6c90cacbfa4d607461555a16c;"+
	"sessionid_ss=25d28de6c90cacbfa4d607461555a16c;"+
	"sid_ucp_v1=1.0.0-KGY2NGNhZDYxODA4MDNkYTQyY2ZmMTM3NWI3Y2ViYzdmYTRhZmE0NjEKFgjNgODXhY2BBhDt6fKtBhiwFDgIQDgaAmxmIiAyNWQyOGRlNmM5MGNhY2JmYTRkNjA3NDYxNTU1YTE2Yw;"+
	"ssid_ucp_v1=1.0.0-KGY2NGNhZDYxODA4MDNkYTQyY2ZmMTM3NWI3Y2ViYzdmYTRhZmE0NjEKFgjNgODXhY2BBhDt6fKtBhiwFDgIQDgaAmxmIiAyNWQyOGRlNmM5MGNhY2JmYTRkNjA3NDYxNTU1YTE2Yw;"+
	"store-region=cn-he;"+
	"store-region-src=uid;"+
	"_ga=GA1.2.319293305.1706865901;"+
	"_ga_S695FMNGPJ=GS1.2.1706865901.1.0.1706865901.60.0.0;"+
	"_tea_utm_cache_2608={%22utm_source%22:%22jj_nav%22};"+
	"csrf_session_id=b9eeee94454badf2bdd140520580b8d7",
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
