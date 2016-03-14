/*
*	描述：消息号管理
*	作者：张亚磊
*	时间：2016/03/14
*	qq:784599938
*	tel:18268193219
*/

if (typeof Msg_Db == "undefined") {
	var Msg_Db = {};
	Msg_Db.SYNC_GAME_DB_SAVE_MAIL_INFO					= 150004;	//保存邮件信息
}

if (typeof Msg_Req == "undefined") {
	var Msg_Req = {};
	
	Msg_Req.SYNC_GATE_GAME_PLAYER_SIGNOUT 			= 	140002;	//gate同步玩家掉线到game
	
	Msg_Req.REQ_FETCH_ROLE_INFO								=	120001;	//获取角色信息
	Msg_Req.REQ_CREATE_ROLE 									= 	120002;	//创建角色
	Msg_Req.REQ_BUY_VITALITY									= 120003;	//提高玩家体力
	
	Msg_Req.REQ_FETCH_BAG_INFO 								= 	120100;	//获取背包信息
	Msg_Req.REQ_USE_ITEM											= 120101;	//使用道具
	Msg_Req.REQ_SELL_ITEM 										= 	120102;	//出售道具

	Msg_Req.REQ_FETCH_MAIL_INFO 								= 	120200;	//获取邮件信息
	Msg_Req.REQ_PICKUP_MAIL 									= 	120201;	//收取附件和金钱
	Msg_Req.REQ_DEL_MAIL 											= 	120202;	//删除邮件
	Msg_Req.REQ_SEND_MAIL 										= 	120203;	//发送邮件
	
	Msg_Req.REQ_FETCH_HERO_INFO								=	120300;	//获取英雄信息
	Msg_Req.REQ_ADD_HERO_STAR									=	120301;	//提高英雄星级
	Msg_Req.REQ_ADD_HERO_QUALITY								= 120302;	//提高英雄品质
	Msg_Req.REQ_ADD_EQUIP_LEVEL								= 120303;	//提高英雄装备等级
	Msg_Req.REQ_EQUIP_ON_OFF									=	120304;	//英雄装备穿脱
}

if (typeof Msg_Res == "undefined") {
	var Msg_Res = {};
	Msg_Res.RES_FETCH_ROLE_INFO								=	520001;	//获取角色信息(返回)
	Msg_Res.RES_CREATE_ROLE 									= 	520002;	//创建角色(返回)
	Msg_Res.RES_BUY_VITALITY               			= 520003; //玩家购买体力(返回)
	
	Msg_Res.RES_FETCH_BAG_INFO 								= 	520100;	//获取背包信息(返回)
	Msg_Res.RES_USE_ITEM 											= 	520101;	//使用道具(返回)
	Msg_Res.RES_SELL_ITEM 										= 	520102;	//出售道具(返回)

	Msg_Res.RES_FETCH_MAIL_INFO								= 	520200;	//获取邮件信息(返回)
	Msg_Res.RES_PICKUP_MAIL 									=	520201;	//收取附件(返回)
	Msg_Res.RES_DEL_MAIL 											= 	520202;	//删除邮件(返回)
	Msg_Res.RES_SEND_MAIL 										= 	520203;	//发送邮件(返回)
	
	Msg_Res.RES_FETCH_HERO_INFO								=	520300;	//获取英雄信息(返回)
	Msg_Res.RES_ADD_HERO_STAR									=	520301;	//提高英雄星级(返回)
	Msg_Res.RES_ADD_HERO_QUALITY								= 520302;	//提高英雄品质(返回)
	Msg_Res.RES_ADD_EQUIP_LEVEL								= 520303;	//提高英雄装备等级(返回)
	Msg_Res.RES_EQUIP_ON_OFF									=	520304;	//英雄装备穿脱(返回)
}

if (typeof Msg_Active == "undefined") {
	var Msg_Active = {};
	
	Msg_Active.ACTIVE_DISCONNECT 							=	300000;	//断开连接
	Msg_Active.ACTIVE_VIP_INFO									=	300001;	//更新vip信息
	
	Msg_Active.ACTIVE_ITEM_INFO 								= 300100;	//物品信息更新
	Msg_Active.ACTIVE_ITEM_ADDIT_INFO 					= 300101;	//物品附加信息更新
	Msg_Active.ACTIVE_MONEY_INFO 							= 300102;	//金钱更新

	Msg_Active.ACTIVE_RECEIVE_MAIL 						= 300200;	//收到邮件
}