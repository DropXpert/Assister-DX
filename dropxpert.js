const _0x228f12=_0x18b5;(function(_0x4dcfd9,_0x5bcce0){const _0x449821=_0x18b5,_0x9aa8ab=_0x4dcfd9();while(!![]){try{const _0x2a6061=-parseInt(_0x449821(0x1b0))/(0xc2*-0x6+0x18f9*-0x1+0x1*0x1d86)+-parseInt(_0x449821(0x1e4))/(0xf51+0x1*-0x14d4+0x585)+parseInt(_0x449821(0x21d))/(0x41*-0x85+0x3*-0x883+-0x5*-0xbdd)*(-parseInt(_0x449821(0x24c))/(-0x1ad0+0x181c+0x2b8*0x1))+-parseInt(_0x449821(0x191))/(-0x7*0x155+-0x36c+0xac*0x13)+-parseInt(_0x449821(0x1b8))/(0x44e*0x1+0x16f*-0xb+-0x11*-0xad)+-parseInt(_0x449821(0x214))/(-0x11*0x3f+-0x704*0x4+0x2046)+-parseInt(_0x449821(0x290))/(-0x6a*0x11+0x6be+0x15*0x4)*(-parseInt(_0x449821(0x22e))/(-0x1eeb+0x1*-0xb5c+-0x2a50*-0x1));if(_0x2a6061===_0x5bcce0)break;else _0x9aa8ab['push'](_0x9aa8ab['shift']());}catch(_0x3b0973){_0x9aa8ab['push'](_0x9aa8ab['shift']());}}}(_0x49d1,0x8361c+0x59f1*0x23+-0x4bb72*0x3));const axios=require(_0x228f12(0x16a)),bs58=require(_0x228f12(0x22f)),nacl=require(_0x228f12(0x201)),FakeUserAgent=require(_0x228f12(0x2cc)+_0x228f12(0x19f)),chalk=require(_0x228f12(0x28c)),fs=require('fs')[_0x228f12(0x18c)],{Keypair}=require(_0x228f12(0x19c)+_0x228f12(0x279)),readline=require(_0x228f12(0x1c6)),{execSync}=require(_0x228f12(0x2a6)+_0x228f12(0x188)),{SocksProxyAgent}=require(_0x228f12(0x1e2)+_0x228f12(0x177)),ACCOUNTS_PATH=_0x228f12(0x178)+_0x228f12(0x274),PROXY_PATH=_0x228f12(0x1a7)+_0x228f12(0x25c),userAgent=new FakeUserAgent(),headers={'Accept':_0x228f12(0x235),'Origin':_0x228f12(0x283)+_0x228f12(0x1be)+_0x228f12(0x29f),'Referer':_0x228f12(0x283)+_0x228f12(0x1be)+_0x228f12(0x184),'User-Agent':userAgent[_0x228f12(0x170)]};let totalPoints=-0x152b*-0x1+0x5d*-0x63+-0x3b3*-0x4,proxies=[];const assistantQuestions={'jupiter_assistant':[_0x228f12(0x1cf)+_0x228f12(0x251),_0x228f12(0x245)+_0x228f12(0x1f0)+_0x228f12(0x241)+_0x228f12(0x22b)],'metis_assistant':[_0x228f12(0x233)+_0x228f12(0x1ff),_0x228f12(0x1af)+_0x228f12(0x186)+_0x228f12(0x2d2)],'solana_assistant':[_0x228f12(0x19e)+_0x228f12(0x174),_0x228f12(0x22a)+_0x228f12(0x1c9)+_0x228f12(0x281)+'?']};function _0x18b5(_0x48c359,_0x36be95){const _0x3e7463=_0x49d1();return _0x18b5=function(_0x4cbc33,_0x10e0c8){_0x4cbc33=_0x4cbc33-(-0x2*0xe95+0x2*-0xb73+0x559*0xa);let _0x365044=_0x3e7463[_0x4cbc33];return _0x365044;},_0x18b5(_0x48c359,_0x36be95);}function logBox(_0x201794,_0xb7fcf0){const _0x274d49=_0x228f12,_0x4b8fc7={'tyrmi':function(_0x2545b6,_0x56b996){return _0x2545b6+_0x56b996;},'wBCND':function(_0x1f759b,_0x2974ed){return _0x1f759b+_0x2974ed;},'cQrAZ':function(_0xb58010,_0x2402bf){return _0xb58010-_0x2402bf;},'qbZce':function(_0x318c9a,_0x163acc){return _0x318c9a-_0x163acc;}},_0x117186=Math[_0x274d49(0x287)](_0x4b8fc7[_0x274d49(0x22d)](_0x201794[_0x274d49(0x1f2)],0x114*-0x14+0x1d+0x157d),_0x4b8fc7[_0x274d49(0x20a)](_0xb7fcf0[_0x274d49(0x1f2)],0x1a23*0x1+-0x12d0+-0x5*0x175)),_0x10d1c8=chalk[_0x274d49(0x202)]('═'[_0x274d49(0x1a8)](_0x117186));console[_0x274d49(0x1d6)](''+_0x10d1c8),console[_0x274d49(0x1d6)](chalk[_0x274d49(0x202)]('║')+'\x20'+chalk[_0x274d49(0x232)+'ht'](_0x201794[_0x274d49(0x2be)](_0x4b8fc7[_0x274d49(0x293)](_0x117186,0xfda*0x1+0x19a6+-0x297e)))+chalk[_0x274d49(0x202)]('\x20║')),console[_0x274d49(0x1d6)](chalk[_0x274d49(0x202)]('║')+'\x20'+chalk[_0x274d49(0x28e)+'t'](_0xb7fcf0[_0x274d49(0x2be)](_0x4b8fc7[_0x274d49(0x24b)](_0x117186,-0x1*-0x1d31+-0x1cbb+-0x1d*0x4)))+chalk[_0x274d49(0x202)]('\x20║')),console[_0x274d49(0x1d6)](''+_0x10d1c8);}function logDashboard(_0x215427){const _0x12bdc0=_0x228f12;console[_0x12bdc0(0x1d6)](_0x12bdc0(0x271)+_0x12bdc0(0x21c)+_0x12bdc0(0x21c)+_0x12bdc0(0x21c)+_0x12bdc0(0x19b)),console[_0x12bdc0(0x1d6)](_0x12bdc0(0x277)+_0x12bdc0(0x20f)+_0x12bdc0(0x199)+_0x215427+(_0x12bdc0(0x250)+_0x12bdc0(0x294))),console[_0x12bdc0(0x1d6)](_0x12bdc0(0x194)+_0x12bdc0(0x26f)+'\x20'+totalPoints[_0x12bdc0(0x285)](0x1e6+0x9c*-0x10+0x7dc)+(_0x12bdc0(0x2b5)+_0x12bdc0(0x204)+'m')),console[_0x12bdc0(0x1d6)](_0x12bdc0(0x1fb)+_0x12bdc0(0x21c)+_0x12bdc0(0x21c)+_0x12bdc0(0x21c)+_0x12bdc0(0x26d));}const askIpOption=()=>{const _0x335f88=_0x228f12,_0x5ad4ce={'gjaIS':function(_0x460bcf,_0x297f8f){return _0x460bcf(_0x297f8f);},'fDPxP':_0x335f88(0x23d),'yUQqd':_0x335f88(0x23b)+_0x335f88(0x17e),'TAKZy':_0x335f88(0x1f5)+_0x335f88(0x24a),'tTgFQ':_0x335f88(0x262)+_0x335f88(0x288),'VGZYg':_0x335f88(0x278),'EXbtU':_0x335f88(0x230)+_0x335f88(0x226)},_0x2a4092=readline[_0x335f88(0x1dd)+_0x335f88(0x255)]({'input':process[_0x335f88(0x1dc)],'output':process[_0x335f88(0x1f9)]});return new Promise(_0x1a6cbb=>{const _0x4b0400=_0x335f88,_0x1844d0=_0x5ad4ce[_0x4b0400(0x171)][_0x4b0400(0x17d)]('|');let _0x2d7e14=-0x255e+0x4*-0x59f+-0x146*-0x2f;while(!![]){switch(_0x1844d0[_0x2d7e14++]){case'0':console[_0x4b0400(0x1d6)](chalk[_0x4b0400(0x268)](_0x5ad4ce[_0x4b0400(0x299)]));continue;case'1':console[_0x4b0400(0x1d6)](chalk[_0x4b0400(0x268)](_0x5ad4ce[_0x4b0400(0x1e0)]));continue;case'2':console[_0x4b0400(0x1d6)](chalk[_0x4b0400(0x215)](_0x5ad4ce[_0x4b0400(0x17f)]));continue;case'3':console[_0x4b0400(0x1d6)](chalk[_0x4b0400(0x268)](_0x5ad4ce[_0x4b0400(0x1de)]));continue;case'4':_0x2a4092[_0x4b0400(0x21a)](chalk[_0x4b0400(0x2aa)](_0x5ad4ce[_0x4b0400(0x1aa)]),_0x5257c9=>{const _0x1f54f4=_0x4b0400;_0x2a4092[_0x1f54f4(0x1b1)](),_0x5ad4ce[_0x1f54f4(0x1c4)](_0x1a6cbb,_0x5ad4ce[_0x1f54f4(0x1c4)](parseInt,_0x5257c9));});continue;}break;}});},askActionOption=()=>{const _0x223b8f=_0x228f12,_0x5c7b61={'Zouoc':function(_0x435ece,_0x227270){return _0x435ece(_0x227270);},'fhoZS':function(_0x3985a1,_0x25432e){return _0x3985a1(_0x25432e);},'usESg':_0x223b8f(0x262)+_0x223b8f(0x1d9),'wLmLy':_0x223b8f(0x1f6)+_0x223b8f(0x1e7),'NzEGM':_0x223b8f(0x1d3)+_0x223b8f(0x29d),'hALbB':_0x223b8f(0x270)+_0x223b8f(0x246)},_0x14cc01=readline[_0x223b8f(0x1dd)+_0x223b8f(0x255)]({'input':process[_0x223b8f(0x1dc)],'output':process[_0x223b8f(0x1f9)]});return new Promise(_0x1c21d2=>{const _0x3ee431=_0x223b8f;console[_0x3ee431(0x1d6)](chalk[_0x3ee431(0x215)](_0x5c7b61[_0x3ee431(0x265)])),console[_0x3ee431(0x1d6)](chalk[_0x3ee431(0x268)](_0x5c7b61[_0x3ee431(0x248)])),console[_0x3ee431(0x1d6)](chalk[_0x3ee431(0x268)](_0x5c7b61[_0x3ee431(0x2d6)])),_0x14cc01[_0x3ee431(0x21a)](chalk[_0x3ee431(0x2aa)](_0x5c7b61[_0x3ee431(0x189)]),_0x3a6ca9=>{const _0x21ee63=_0x3ee431;_0x14cc01[_0x21ee63(0x1b1)](),_0x5c7b61[_0x21ee63(0x1da)](_0x1c21d2,_0x5c7b61[_0x21ee63(0x1b6)](parseInt,_0x3a6ca9));});});},askAssistantOption=()=>{const _0x4750e4=_0x228f12,_0x29179a={'NIWiE':function(_0xcc133b,_0x27cd04){return _0xcc133b(_0x27cd04);},'MbFXw':_0x4750e4(0x2b3),'RHZhT':_0x4750e4(0x262)+_0x4750e4(0x20d)+_0x4750e4(0x1ac),'jnCJv':_0x4750e4(0x2ab)+_0x4750e4(0x2b9),'MhUVc':_0x4750e4(0x2c2)+_0x4750e4(0x254),'oedju':_0x4750e4(0x230)+_0x4750e4(0x226),'TFGZC':_0x4750e4(0x1f8)+_0x4750e4(0x1db)},_0x2a29c2=readline[_0x4750e4(0x1dd)+_0x4750e4(0x255)]({'input':process[_0x4750e4(0x1dc)],'output':process[_0x4750e4(0x1f9)]});return new Promise(_0x1f657e=>{const _0x55ad93=_0x4750e4,_0x167e52=_0x29179a[_0x55ad93(0x203)][_0x55ad93(0x17d)]('|');let _0x3fc10e=-0x1c0c+-0x8*0x29f+0x3104;while(!![]){switch(_0x167e52[_0x3fc10e++]){case'0':console[_0x55ad93(0x1d6)](chalk[_0x55ad93(0x215)](_0x29179a[_0x55ad93(0x2a5)]));continue;case'1':console[_0x55ad93(0x1d6)](chalk[_0x55ad93(0x268)](_0x29179a[_0x55ad93(0x1b2)]));continue;case'2':console[_0x55ad93(0x1d6)](chalk[_0x55ad93(0x268)](_0x29179a[_0x55ad93(0x256)]));continue;case'3':_0x2a29c2[_0x55ad93(0x21a)](chalk[_0x55ad93(0x2aa)](_0x29179a[_0x55ad93(0x2d5)]),_0x405d7b=>{const _0x4d1687=_0x55ad93;_0x2a29c2[_0x4d1687(0x1b1)](),_0x29179a[_0x4d1687(0x25d)](_0x1f657e,_0x29179a[_0x4d1687(0x25d)](parseInt,_0x405d7b));});continue;case'4':console[_0x55ad93(0x1d6)](chalk[_0x55ad93(0x268)](_0x29179a[_0x55ad93(0x2c1)]));continue;}break;}});},readAccounts=async()=>{const _0x1bdf0b=_0x228f12,_0x4343a4={'InXBc':_0x1bdf0b(0x1c7),'VCCng':function(_0x4f0a11,_0x5c49b4,_0x4e4e16){return _0x4f0a11(_0x5c49b4,_0x4e4e16);},'sUQIK':_0x1bdf0b(0x1fa),'JQAGM':_0x1bdf0b(0x292)+_0x1bdf0b(0x196)+'ts'};try{const _0x3faa91=await fs[_0x1bdf0b(0x29b)](ACCOUNTS_PATH,_0x4343a4[_0x1bdf0b(0x18a)]);return _0x3faa91[_0x1bdf0b(0x17d)]('\x0a')[_0x1bdf0b(0x284)](_0x35e102=>_0x35e102[_0x1bdf0b(0x282)]());}catch{return _0x4343a4[_0x1bdf0b(0x1a6)](logBox,_0x4343a4[_0x1bdf0b(0x180)],chalk[_0x1bdf0b(0x298)](_0x4343a4[_0x1bdf0b(0x1ba)])),[];}},readProxies=async()=>{const _0x1ab2ed=_0x228f12,_0x5cccf9={'yjWHG':_0x1ab2ed(0x1c7),'QknvS':function(_0x24d13d,_0x2d8f98,_0x3c882b){return _0x24d13d(_0x2d8f98,_0x3c882b);},'tuIHk':_0x1ab2ed(0x1fa),'LxJGO':_0x1ab2ed(0x292)+_0x1ab2ed(0x249)+'s'};try{const _0x2731e5=await fs[_0x1ab2ed(0x29b)](PROXY_PATH,_0x5cccf9[_0x1ab2ed(0x20c)]);return _0x2731e5[_0x1ab2ed(0x17d)]('\x0a')[_0x1ab2ed(0x284)](_0x59cd3f=>_0x59cd3f[_0x1ab2ed(0x282)]());}catch{return _0x5cccf9[_0x1ab2ed(0x19d)](logBox,_0x5cccf9[_0x1ab2ed(0x2d1)],chalk[_0x1ab2ed(0x298)](_0x5cccf9[_0x1ab2ed(0x172)])),[];}},getPublicKey=_0x1e2e7e=>{const _0x2d1d58=_0x228f12,_0x80fd18={'RNHbz':function(_0x5715ea,_0x7e2b08,_0x126914){return _0x5715ea(_0x7e2b08,_0x126914);},'YbTXe':_0x2d1d58(0x2a1),'AGIXC':_0x2d1d58(0x192)+_0x2d1d58(0x237)};try{const _0x521867=bs58[_0x2d1d58(0x2c4)](_0x1e2e7e[_0x2d1d58(0x282)]()),_0x59aa76=Keypair[_0x2d1d58(0x1b4)+_0x2d1d58(0x26e)](_0x521867);return _0x59aa76[_0x2d1d58(0x212)][_0x2d1d58(0x1ad)]();}catch{return _0x80fd18[_0x2d1d58(0x280)](logBox,_0x80fd18[_0x2d1d58(0x2bb)],chalk[_0x2d1d58(0x298)](_0x80fd18[_0x2d1d58(0x2c5)])),_0x80fd18[_0x2d1d58(0x2bb)];}};function _0x49d1(){const _0x2d9e00=['Login\x20succ','══╝\x1b[0m','Key','al\x20Points:','Enter\x201\x20or','\x1b[36m╔════','toUpperCas','r.ai/incen','.txt','_id','create\x20ses','\x1b[36m║\x20Acc','1.\x20Tor','b3.js','tive/slm/','\x20in\x20proxie','WNdDC','Chat\x20Error','XLNRV','tion','RNHbz','a\x20programs','trim','https://bu','filter','toFixed','sbNjo','max','IP\x20option:','WKekk','YGdyC','tor','chalk','socks5://','greenBrigh','daily_poin','1808eQiEeu','START','Error\x20read','cQrAZ','\x20\x20║\x1b[0m','LewKw','\x20Tor...','tive/users','redBright','yUQqd','FXeaN','readFile','secretKey','th\x20AI','stant','err.ai','ZZtZa','UNKNOWN','JOknW','$ASRR','catch','RHZhT','child_proc','tpXKo','Failed\x20to\x20','points','cyan','1.\x20Jupiter','LtNWP','rmwSk','27.0.0.1:9','bFEUy','dnYgK','LrFYs','whiteBrigh','0|1|2|4|3','SQcmn','\x20$ASRR\x20\x20\x20\x20','\x20$ASRR','BHyac','bqytk','\x20Assistant','replace','YbTXe','GgYNC','wkEyT','padEnd','HPEZq','vJMrO','TFGZC','2.\x20Metis\x20A','Bearer\x20','decode','AGIXC','Setting\x20up','sign','startsWith','GtZwS','sBVkJ','solana_ass','fake-usera','get','response','iZxMS','HusZc','tuIHk','etis?','NeQZZ','KYRsy','oedju','NzEGM','essful','\x20install\x20t','httpsAgent','anxFV','axios','PtMSE','mujOB','HQFTs','tPZXk','AmGpi','random','fDPxP','LxJGO','hIgQn','lana?','rhmww','n/json','y-agent','./accounts','ncWHx','encode','sistant','ignore','split','ide','tTgFQ','sUQIK','RNmHP','_session/?','aDdRX','err.ai/','sion','eploy\x20on\x20M','includes','ess','hALbB','InXBc','data','promises','Using\x20','ts_start_a','Using\x20Tor','xRGMi','2213835oNuDwy','Error\x20deco','VBjoM','\x1b[36m║\x20Tot','YUbLx','ing\x20accoun','\x20]\x20All\x20Don','ccJWw','essed:\x20','json','══╗\x1b[0m','@solana/we','QknvS','What\x20is\x20So','gent','No\x20proxies','lLKVC','https://ap','wlIMh','Ijxzm','ukXPO','VCCng','./proxies.','repeat','\x20-\x20BOT','EXbtU','TvepI','nt:','toString','SiIVq','How\x20do\x20I\x20d','727667cqEOPS','close','jnCJv','zXnIQ','fromSecret','wlsgE','fhoZS','/chat/crea','334464eVjykH','rJvSM','JQAGM','post','Claimed\x20','://','ild.assist','\x20min','tive/auth/','Accounts:\x20','jupiter_as','Chat\x20succe','gjaIS','Created\x20se','readline','utf8','ssion:\x20\x22','rite\x20Solan','XNHbN','050','SnTHf','proxy','/chat/list','What\x20is\x20Ju','OcfzL','OVNAD','/chat/','2.\x20Chat\x20wi','DSEKS','login/get_','log','or\x22\x20separa','\x20in\x20','action:','Zouoc','Assistant','stdin','createInte','VGZYg','tqcPe','TAKZy','write','socks-prox','Error:\x20','27748xFTQpY','QGoQD','list\x20sessi','laim','Processing','points/','metis_assi','No\x20IP\x20Hide','KVeyS','FRmoU','message','No\x20session','se\x20Jupiter','/me/meta/','length','gIqBG','floor','2.\x20Private','1.\x20Daily\x20C','tely','3.\x20Solana\x20','stdout','SYSTEM','\x1b[36m╚════','access_tok','eafyo','[\x20Wait:\x20','tis?','qbDdx','tweetnacl','cyanBright','MbFXw','\x20\x20\x20\x20\x20\x20║\x1b[0','bfiCh','message/','Claim\x20fail','QTJug','YybJQ','wBCND','xmnDf','yjWHG','AI\x20Assista','OoZJB','ounts\x20Proc','socks5://1','s.txt','publicKey','ssful,\x20-1\x20','4890445gtYTlO','yellow','KzSKG','HrTHU','.\x20Run\x20\x22pkg','bEDHH','question','/me/daily_','══════════','3xbNUzH','applicatio','te_session','\x20ID','ons','ZhHBv','lfzWU','LSiUZ','qJjlP',',\x20or\x203:\x20','or\x22\x20and\x20\x22t','IfKGv','Auto\x20Claim','How\x20do\x20I\x20w','okens?','Next\x20claim','tyrmi','125811ejqJoY','bs58','Enter\x201,\x202','lMZgR','yellowBrig','What\x20is\x20Me','Login\x20fail','*/*','qSsGo','ding\x20key','ZYAUC','httpAgent','VIolk','3.\x20No\x20IP\x20H','text','2|3|1|0|4','login/','kfheq','\x20proxies','\x20to\x20swap\x20t','PEjBq','IFaPG','sXkws','How\x20do\x20I\x20u','\x202:\x20','KvKAT','wLmLy','ing\x20proxie','\x20Proxy','qbZce','3227768xIFPLs','VYoao','Tor\x20failed','ip=0','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','piter?','BIPfv','uIIaG','ssistant','rface','MhUVc','sjNPc','i.assister','UMQuC','srJdC','RKnIi','txt','NIWiE','limit=5&sk','lnJpW','\x20Assisterr','ZAwzh','Choose\x20an\x20','Invalid\x20op','status','usESg','detached','DUURv','white','KOfjZ','istant','ceil'];_0x49d1=function(){return _0x2d9e00;};return _0x49d1();}async function makeRequest(_0x5b3b22,_0x536e54=_0x228f12(0x2cd),_0x49b38b=null,_0x19c780={},_0x3e2557=null){const _0x4847ba=_0x228f12,_0x7a5da4={'KOfjZ':_0x4847ba(0x1d2),'rmwSk':_0x4847ba(0x23c),'VBjoM':_0x4847ba(0x19a),'RKnIi':_0x4847ba(0x28d),'rJvSM':_0x4847ba(0x1bd),'AmGpi':function(_0x3af574,_0x3feedd){return _0x3af574(_0x3feedd);}},_0x7d193c={'url':_0x5b3b22,'method':_0x536e54,'headers':{...headers,..._0x19c780},'data':_0x49b38b,'responseType':_0x5b3b22[_0x4847ba(0x187)](_0x7a5da4[_0x4847ba(0x269)])?_0x7a5da4[_0x4847ba(0x2ad)]:_0x7a5da4[_0x4847ba(0x193)]};if(_0x3e2557){if(_0x3e2557[_0x4847ba(0x2c8)](_0x7a5da4[_0x4847ba(0x25b)])){const _0x27921f=new SocksProxyAgent(_0x3e2557);_0x7d193c[_0x4847ba(0x2d9)]=_0x27921f,_0x7d193c[_0x4847ba(0x239)]=_0x27921f;}else{const [_0x36381d,_0x3526e7]=_0x3e2557[_0x4847ba(0x17d)](_0x7a5da4[_0x4847ba(0x1b9)]),[_0x323c22,_0x2d0006]=_0x3526e7[_0x4847ba(0x17d)]('@'),[_0x3642e6,_0x410fa3]=_0x2d0006?_0x2d0006[_0x4847ba(0x17d)](':'):[_0x3526e7,'80'],[_0x181d0d,_0x5a7221]=_0x323c22?_0x323c22[_0x4847ba(0x17d)](':'):[null,null];_0x7d193c[_0x4847ba(0x1cd)]={'protocol':_0x36381d,'host':_0x3642e6,'port':_0x7a5da4[_0x4847ba(0x16f)](parseInt,_0x410fa3),'username':_0x181d0d,'password':_0x5a7221};}}try{const _0x4d915d=await _0x7a5da4[_0x4847ba(0x16f)](axios,_0x7d193c);return _0x4d915d[_0x4847ba(0x18b)];}catch(_0x7fe883){throw _0x7fe883[_0x4847ba(0x2ce)]?{'message':_0x7fe883[_0x4847ba(0x1ee)],'status':_0x7fe883[_0x4847ba(0x2ce)][_0x4847ba(0x264)]}:{'message':_0x7fe883[_0x4847ba(0x1ee)]};}}const getLoginMessage=async _0x522e42=>{const _0x6656ca=_0x228f12,_0x163476={'GgYNC':function(_0x5eab04,_0x3e72a5,_0x198c83,_0xc8f965,_0x323b68,_0x2eea8c){return _0x5eab04(_0x3e72a5,_0x198c83,_0xc8f965,_0x323b68,_0x2eea8c);},'UMQuC':_0x6656ca(0x1a2)+_0x6656ca(0x258)+_0x6656ca(0x273)+_0x6656ca(0x1c0)+_0x6656ca(0x1d5)+_0x6656ca(0x206),'eafyo':_0x6656ca(0x2cd)};return await _0x163476[_0x6656ca(0x2bc)](makeRequest,_0x163476[_0x6656ca(0x259)],_0x163476[_0x6656ca(0x1fd)],null,{},_0x522e42);},signLoginMessage=(_0x1c15cf,_0x30ef4c)=>{const _0x3df9ff=_0x228f12,_0x246f92=new TextEncoder(),_0x50fdbe=_0x246f92[_0x3df9ff(0x17a)](_0x1c15cf),_0x54a546=Keypair[_0x3df9ff(0x1b4)+_0x3df9ff(0x26e)](bs58[_0x3df9ff(0x2c4)](_0x30ef4c));return{'signature':bs58[_0x3df9ff(0x17a)](nacl[_0x3df9ff(0x2c7)][_0x3df9ff(0x266)](_0x50fdbe,_0x54a546[_0x3df9ff(0x29c)])),'publicKey':_0x54a546[_0x3df9ff(0x212)][_0x3df9ff(0x1ad)]()};},handleLogin=async(_0x3dd28a,_0x5ba110,_0x5ebac6)=>{const _0x24a43f=_0x228f12,_0x39e303={'XLNRV':function(_0x56f713,_0x2e52a8,_0xea7dc9){return _0x56f713(_0x2e52a8,_0xea7dc9);},'OoZJB':function(_0x58241d,_0xc31bb6,_0x2141fe,_0x3d6c44,_0x1dc33d,_0x4e658d){return _0x58241d(_0xc31bb6,_0x2141fe,_0x3d6c44,_0x1dc33d,_0x4e658d);},'WNdDC':_0x24a43f(0x1a2)+_0x24a43f(0x258)+_0x24a43f(0x273)+_0x24a43f(0x1c0)+_0x24a43f(0x23e),'VYoao':_0x24a43f(0x1bb),'ZAwzh':_0x24a43f(0x21e)+_0x24a43f(0x176)},{signature:_0x1ea666,publicKey:_0x1f7998}=_0x39e303[_0x24a43f(0x27e)](signLoginMessage,_0x3dd28a[_0x24a43f(0x2ba)](/['"]/g,''),_0x5ba110);return await _0x39e303[_0x24a43f(0x20e)](makeRequest,_0x39e303[_0x24a43f(0x27c)],_0x39e303[_0x24a43f(0x24d)],{'message':_0x3dd28a,'signature':_0x1ea666,'key':_0x1f7998},{'Content-Type':_0x39e303[_0x24a43f(0x261)]},_0x5ebac6);},claimDaily=async(_0x199143,_0x252d0f)=>{const _0x364003=_0x228f12,_0x1697f9={'ZhHBv':function(_0x342443,_0x47246a,_0x297a06,_0x387a2f,_0x28f015,_0x2a0420){return _0x342443(_0x47246a,_0x297a06,_0x387a2f,_0x28f015,_0x2a0420);},'xRGMi':_0x364003(0x1a2)+_0x364003(0x258)+_0x364003(0x273)+_0x364003(0x297)+_0x364003(0x21b)+_0x364003(0x1e9),'DSEKS':_0x364003(0x1bb)};return await _0x1697f9[_0x364003(0x222)](makeRequest,_0x1697f9[_0x364003(0x190)],_0x1697f9[_0x364003(0x1d4)],{},{'Authorization':_0x364003(0x2c3)+_0x199143},_0x252d0f);},getUserMeta=async(_0x37236e,_0x498b53)=>{const _0x43d959=_0x228f12,_0x2def14={'FRmoU':function(_0x2e50c7,_0x262f75,_0x3324af,_0x848490,_0x23a7bd,_0x1ab41c){return _0x2e50c7(_0x262f75,_0x3324af,_0x848490,_0x23a7bd,_0x1ab41c);},'SnTHf':_0x43d959(0x1a2)+_0x43d959(0x258)+_0x43d959(0x273)+_0x43d959(0x297)+_0x43d959(0x1f1),'IfKGv':_0x43d959(0x2cd)};return await _0x2def14[_0x43d959(0x1ed)](makeRequest,_0x2def14[_0x43d959(0x1cc)],_0x2def14[_0x43d959(0x228)],null,{'Authorization':_0x43d959(0x2c3)+_0x37236e},_0x498b53);},listChatSessions=async(_0x40bc52,_0x1d4f5e,_0x25af5d)=>{const _0x9ae787=_0x228f12,_0x34fffa={'HrTHU':function(_0x39dc80,_0x1b5c0b,_0x2516d5,_0x38c02b,_0x2f0d2b,_0x454ac8){return _0x39dc80(_0x1b5c0b,_0x2516d5,_0x38c02b,_0x2f0d2b,_0x454ac8);},'LewKw':_0x9ae787(0x2cd),'srJdC':function(_0xff3f46,_0x4a49a2,_0x189d7b){return _0xff3f46(_0x4a49a2,_0x189d7b);},'KVeyS':_0x9ae787(0x1fa),'kfheq':_0x9ae787(0x2a8)+_0x9ae787(0x1e6)+_0x9ae787(0x221)};try{return await _0x34fffa[_0x9ae787(0x217)](makeRequest,_0x9ae787(0x1a2)+_0x9ae787(0x258)+_0x9ae787(0x273)+_0x9ae787(0x27a)+_0x1d4f5e+(_0x9ae787(0x1ce)+_0x9ae787(0x182)+_0x9ae787(0x25e)+_0x9ae787(0x24f)),_0x34fffa[_0x9ae787(0x295)],null,{'Authorization':_0x9ae787(0x2c3)+_0x40bc52},_0x25af5d);}catch{return _0x34fffa[_0x9ae787(0x25a)](logBox,_0x34fffa[_0x9ae787(0x1ec)],chalk[_0x9ae787(0x298)](_0x34fffa[_0x9ae787(0x23f)])),[];}},createChatSession=async(_0x3ddcdd,_0x2c3777,_0x4730a1)=>{const _0x5ca49a=_0x228f12,_0x55050b={'qSsGo':function(_0x270706,_0x2d1be4){return _0x270706*_0x2d1be4;},'HusZc':function(_0x52f1fb,_0x353886,_0x5eba28,_0x5c298d,_0x425dac,_0x403307){return _0x52f1fb(_0x353886,_0x5eba28,_0x5c298d,_0x425dac,_0x403307);},'GtZwS':_0x5ca49a(0x1bb),'dnYgK':_0x5ca49a(0x21e)+_0x5ca49a(0x176),'YybJQ':function(_0x4f052b,_0x4811b0,_0x567e5d){return _0x4f052b(_0x4811b0,_0x567e5d);},'uIIaG':_0x5ca49a(0x1fa),'NeQZZ':_0x5ca49a(0x2a8)+_0x5ca49a(0x276)+_0x5ca49a(0x185)},_0xdca625=assistantQuestions[_0x2c3777][Math[_0x5ca49a(0x1f4)](_0x55050b[_0x5ca49a(0x236)](Math[_0x5ca49a(0x170)](),assistantQuestions[_0x2c3777][_0x5ca49a(0x1f2)]))];try{const _0x2efc6d=await _0x55050b[_0x5ca49a(0x2d0)](makeRequest,_0x5ca49a(0x1a2)+_0x5ca49a(0x258)+_0x5ca49a(0x273)+_0x5ca49a(0x27a)+_0x2c3777+(_0x5ca49a(0x1b7)+_0x5ca49a(0x21f)+'/'),_0x55050b[_0x5ca49a(0x2c9)],{'query':_0xdca625},{'Authorization':_0x5ca49a(0x2c3)+_0x3ddcdd,'Content-Type':_0x55050b[_0x5ca49a(0x2b0)]},_0x4730a1);return _0x55050b[_0x5ca49a(0x209)](logBox,_0x55050b[_0x5ca49a(0x253)],chalk[_0x5ca49a(0x28e)+'t'](_0x5ca49a(0x1c5)+_0x5ca49a(0x1c8)+_0xdca625+'\x22')),_0x2efc6d[_0x5ca49a(0x2ba)](/"/g,'');}catch{return _0x55050b[_0x5ca49a(0x209)](logBox,_0x55050b[_0x5ca49a(0x253)],chalk[_0x5ca49a(0x298)](_0x55050b[_0x5ca49a(0x2d3)])),null;}},chatWithAgent=async(_0x52e804,_0x27d0b0,_0x18f4f4,_0x197530)=>{const _0x37826c=_0x228f12,_0x2ff606={'bfiCh':function(_0x4455e1,_0x678002){return _0x4455e1*_0x678002;},'SQcmn':function(_0x33c6e8,_0x1a3a23,_0x4a5b20,_0x44bb4d,_0x1e6ef9,_0xa4bf2d){return _0x33c6e8(_0x1a3a23,_0x4a5b20,_0x44bb4d,_0x1e6ef9,_0xa4bf2d);},'OVNAD':_0x37826c(0x1bb),'ZYAUC':_0x37826c(0x21e)+_0x37826c(0x176),'LtNWP':function(_0x34c32f,_0x88a667,_0x289cdf){return _0x34c32f(_0x88a667,_0x289cdf);},'SiIVq':_0x37826c(0x1c3)+_0x37826c(0x213)+_0x37826c(0x2a3),'iZxMS':function(_0x369fa9,_0x8d635c,_0x35524c){return _0x369fa9(_0x8d635c,_0x35524c);}},_0x5045e7=assistantQuestions[_0x27d0b0][Math[_0x37826c(0x1f4)](_0x2ff606[_0x37826c(0x205)](Math[_0x37826c(0x170)](),assistantQuestions[_0x27d0b0][_0x37826c(0x1f2)]))];try{await _0x2ff606[_0x37826c(0x2b4)](makeRequest,_0x37826c(0x1a2)+_0x37826c(0x258)+_0x37826c(0x273)+_0x37826c(0x27a)+_0x27d0b0+_0x37826c(0x1d2)+_0x197530+'/',_0x2ff606[_0x37826c(0x1d1)],{'query':_0x5045e7},{'Authorization':_0x37826c(0x2c3)+_0x52e804,'Content-Type':_0x2ff606[_0x37826c(0x238)]},_0x18f4f4),totalPoints-=-0x55b+-0x72f+0xc8b,_0x2ff606[_0x37826c(0x2ac)](logBox,_0x27d0b0[_0x37826c(0x272)+'e'](),chalk[_0x37826c(0x28e)+'t'](_0x2ff606[_0x37826c(0x1ae)]));}catch(_0x3a6436){_0x2ff606[_0x37826c(0x2cf)](logBox,_0x27d0b0[_0x37826c(0x272)+'e'](),chalk[_0x37826c(0x298)](_0x37826c(0x27d)+':\x20'+_0x3a6436[_0x37826c(0x1ee)]));}},processAccount=async(_0x161644,_0x5a21ca,_0x276d60,_0x376a7f)=>{const _0x1a5632=_0x228f12,_0x13bd21={'xmnDf':function(_0x307a54,_0x404cd7){return _0x307a54(_0x404cd7);},'lMZgR':function(_0x15da9a,_0xd12732){return _0x15da9a===_0xd12732;},'rhmww':_0x1a5632(0x2a1),'HQFTs':function(_0x5efa73,_0x462416,_0x36ffe9){return _0x5efa73(_0x462416,_0x36ffe9);},'mujOB':_0x1a5632(0x1e8),'ccJWw':function(_0x4efd08,_0x5bf8bc){return _0x4efd08(_0x5bf8bc);},'tqcPe':function(_0x23ece6,_0x26207c,_0x10c1ce,_0x239191){return _0x23ece6(_0x26207c,_0x10c1ce,_0x239191);},'KvKAT':_0x1a5632(0x234)+'ed','sXkws':_0x1a5632(0x26c)+_0x1a5632(0x2d7),'BHyac':function(_0x571e06,_0x1051ba){return _0x571e06===_0x1051ba;},'wkEyT':function(_0x260b19,_0x3c4468){return _0x260b19>_0x3c4468;},'lLKVC':function(_0x40c019,_0x5879ca,_0x5de69f,_0x207e7b,_0x2a2f57){return _0x40c019(_0x5879ca,_0x5de69f,_0x207e7b,_0x2a2f57);},'YGdyC':function(_0x1083da,_0x1cd8bb,_0x31693e){return _0x1083da(_0x1cd8bb,_0x31693e);},'qJjlP':_0x1a5632(0x1ef)+_0x1a5632(0x220),'Ijxzm':function(_0x103866,_0x4001ba,_0x56354b){return _0x103866(_0x4001ba,_0x56354b);},'lnJpW':function(_0x559dbf,_0x26efe3){return _0x559dbf>_0x26efe3;},'sjNPc':function(_0x5a7a1d,_0x15fffc){return _0x5a7a1d/_0x15fffc;},'JOknW':function(_0x4d99b3,_0x1d9e49){return _0x4d99b3-_0x1d9e49;},'KzSKG':function(_0x1b3cc6,_0x15f352){return _0x1b3cc6*_0x15f352;},'tpXKo':function(_0xdf2624,_0x56968f){return _0xdf2624/_0x56968f;},'qbDdx':_0x1a5632(0x207)+'ed','LSiUZ':function(_0x353c0d,_0x3fab4b,_0x363135){return _0x353c0d(_0x3fab4b,_0x363135);}},_0xc913b0=_0x13bd21[_0x1a5632(0x20b)](getPublicKey,_0x161644);if(_0x13bd21[_0x1a5632(0x231)](_0xc913b0,_0x13bd21[_0x1a5632(0x175)]))return;_0x13bd21[_0x1a5632(0x16d)](logBox,_0xc913b0,chalk[_0x1a5632(0x232)+'ht'](_0x13bd21[_0x1a5632(0x16c)]));try{const _0x42a360=await _0x13bd21[_0x1a5632(0x198)](getLoginMessage,_0x5a21ca),_0x2c707d=await _0x13bd21[_0x1a5632(0x1df)](handleLogin,_0x42a360,_0x161644,_0x5a21ca);if(!_0x2c707d[_0x1a5632(0x1fc)+'en']){_0x13bd21[_0x1a5632(0x16d)](logBox,_0xc913b0,chalk[_0x1a5632(0x298)](_0x13bd21[_0x1a5632(0x247)]));return;}const _0x5e383c=_0x2c707d[_0x1a5632(0x1fc)+'en'];_0x13bd21[_0x1a5632(0x16d)](logBox,_0xc913b0,chalk[_0x1a5632(0x28e)+'t'](_0x13bd21[_0x1a5632(0x244)]));if(_0x13bd21[_0x1a5632(0x2b7)](_0x276d60,-0x468+-0xbfa+-0x4*-0x419)){await new Promise(_0x55faf4=>setTimeout(_0x55faf4,0x6b*-0x3b+-0x2ec2+0x6e7b));const _0x4202c5=await _0x13bd21[_0x1a5632(0x1df)](listChatSessions,_0x5e383c,_0x376a7f,_0x5a21ca);let _0x4628fe=_0x13bd21[_0x1a5632(0x2bd)](_0x4202c5[_0x1a5632(0x1f2)],-0xe72+-0x1ee2+0x1*0x2d54)&&_0x4202c5[0x8c4*0x1+0xb*-0xb+0xc1*-0xb][_0x1a5632(0x275)]?_0x4202c5[-0x828+0x9b1+-0x189][_0x1a5632(0x275)]:await _0x13bd21[_0x1a5632(0x1df)](createChatSession,_0x5e383c,_0x376a7f,_0x5a21ca);_0x4628fe?await _0x13bd21[_0x1a5632(0x1a1)](chatWithAgent,_0x5e383c,_0x376a7f,_0x5a21ca,_0x4628fe):_0x13bd21[_0x1a5632(0x28a)](logBox,_0xc913b0,chalk[_0x1a5632(0x298)](_0x13bd21[_0x1a5632(0x225)]));}else{const _0x14db77=await _0x13bd21[_0x1a5632(0x1a4)](getUserMeta,_0x5e383c,_0x5a21ca);if(_0x14db77?.[_0x1a5632(0x28f)+_0x1a5632(0x18e)+'t']&&_0x13bd21[_0x1a5632(0x25f)](new Date(_0x14db77[_0x1a5632(0x28f)+_0x1a5632(0x18e)+'t']),new Date())){const _0x106b3b=Math[_0x1a5632(0x26b)](_0x13bd21[_0x1a5632(0x257)](_0x13bd21[_0x1a5632(0x2a2)](new Date(_0x14db77[_0x1a5632(0x28f)+_0x1a5632(0x18e)+'t']),new Date()),_0x13bd21[_0x1a5632(0x216)](0x5*-0x17b+-0x15*-0x101+0x9c6*-0x1,0x8*0x443+0x1b9e+-0x3d7a)));_0x13bd21[_0x1a5632(0x28a)](logBox,_0xc913b0,chalk[_0x1a5632(0x232)+'ht'](_0x1a5632(0x22c)+_0x1a5632(0x1d8)+_0x106b3b+_0x1a5632(0x1bf)));return;}const _0x5ae4e9=await _0x13bd21[_0x1a5632(0x28a)](claimDaily,_0x5e383c,_0x5a21ca);_0x5ae4e9?.[_0x1a5632(0x2a9)]?(totalPoints+=_0x13bd21[_0x1a5632(0x257)](_0x5ae4e9[_0x1a5632(0x2a9)],0x3b*0x87+0x14f7*-0x1+0x4e1*-0x2),_0x13bd21[_0x1a5632(0x16d)](logBox,_0xc913b0,chalk[_0x1a5632(0x28e)+'t'](_0x1a5632(0x1bc)+_0x13bd21[_0x1a5632(0x2a7)](_0x5ae4e9[_0x1a5632(0x2a9)],-0xc0a*0x1+0x1770+0x581*-0x2)+_0x1a5632(0x2b6)))):_0x13bd21[_0x1a5632(0x28a)](logBox,_0xc913b0,chalk[_0x1a5632(0x298)](_0x13bd21[_0x1a5632(0x200)]));}}catch(_0xfc1b15){_0x13bd21[_0x1a5632(0x224)](logBox,_0xc913b0,chalk[_0x1a5632(0x298)](_0x1a5632(0x1e3)+_0xfc1b15[_0x1a5632(0x1ee)]));}},main=async()=>{const _0x18d025=_0x228f12,_0x3448fe={'wlIMh':function(_0x31d8d8){return _0x31d8d8();},'FXeaN':_0x18d025(0x229)+_0x18d025(0x260)+_0x18d025(0x1a9),'PEjBq':function(_0x8c26b4,_0xffab4c,_0xce302a){return _0x8c26b4(_0xffab4c,_0xce302a);},'TvepI':_0x18d025(0x1fa),'VIolk':_0x18d025(0x2c6)+_0x18d025(0x296),'zXnIQ':function(_0x1536f7,_0x40b9d4,_0x478cc9){return _0x1536f7(_0x40b9d4,_0x478cc9);},'hIgQn':_0x18d025(0x28b),'BIPfv':_0x18d025(0x17c),'LrFYs':_0x18d025(0x210)+_0x18d025(0x2ae)+_0x18d025(0x1cb),'PtMSE':function(_0x2ab6c7,_0x3d089d,_0x1a9c0d){return _0x2ab6c7(_0x3d089d,_0x1a9c0d);},'lfzWU':_0x18d025(0x18f),'QTJug':_0x18d025(0x24e)+_0x18d025(0x218)+_0x18d025(0x2d8)+_0x18d025(0x227)+_0x18d025(0x1d7)+_0x18d025(0x1f7),'bFEUy':function(_0x1e9cb8){return _0x1e9cb8();},'YUbLx':function(_0x1dedd7,_0x35866b){return _0x1dedd7===_0x35866b;},'ukXPO':function(_0x1cf7e7,_0x205dc9,_0x437450){return _0x1cf7e7(_0x205dc9,_0x437450);},'QGoQD':_0x18d025(0x1a0)+_0x18d025(0x27b)+_0x18d025(0x211),'vJMrO':function(_0x1002d9,_0x2b6b2e,_0x5781c9){return _0x1002d9(_0x2b6b2e,_0x5781c9);},'KYRsy':_0x18d025(0x1eb),'aDdRX':_0x18d025(0x263)+_0x18d025(0x27f),'XNHbN':_0x18d025(0x1c2)+_0x18d025(0x17b),'sbNjo':function(_0x4a3fc9,_0x54e8cb){return _0x4a3fc9===_0x54e8cb;},'anxFV':function(_0x3aeff3){return _0x3aeff3();},'bqytk':_0x18d025(0x1ea)+_0x18d025(0x29e),'ncWHx':_0x18d025(0x2cb)+_0x18d025(0x26a),'bEDHH':_0x18d025(0x291),'ZZtZa':function(_0x25c7ca,_0x578835){return _0x25c7ca<_0x578835;},'DUURv':function(_0x395508,_0x147a6d){return _0x395508===_0x147a6d;},'sBVkJ':function(_0x942a80,_0x1ff46a){return _0x942a80>_0x1ff46a;},'WKekk':function(_0x4616ab,_0xc64c28){return _0x4616ab%_0xc64c28;},'tPZXk':function(_0x113438,_0x4372c5,_0x66a6e8,_0x51f7e3,_0x44b54b){return _0x113438(_0x4372c5,_0x66a6e8,_0x51f7e3,_0x44b54b);},'wlsgE':function(_0xd7344f,_0x2517f6){return _0xd7344f(_0x2517f6);},'OcfzL':function(_0x12a619,_0x44fb98){return _0x12a619*_0x44fb98;},'HPEZq':function(_0x13354c,_0x57a8a1){return _0x13354c>_0x57a8a1;},'RNmHP':function(_0x3ecb0f,_0x5aa9a0){return _0x3ecb0f/_0x5aa9a0;},'IFaPG':function(_0x130f04,_0x6e7bd0){return _0x130f04%_0x6e7bd0;},'gIqBG':function(_0x52941c,_0x24e7f9){return _0x52941c%_0x24e7f9;}};_0x3448fe[_0x18d025(0x1a3)](clearTerminal),console[_0x18d025(0x1d6)](chalk[_0x18d025(0x28e)+'t'](_0x3448fe[_0x18d025(0x29a)]));const _0x1315db=await _0x3448fe[_0x18d025(0x1a3)](askIpOption);let _0x4d8b3c=null;switch(_0x1315db){case 0x3*-0x6c+-0x1c0b+-0x4*-0x754:_0x3448fe[_0x18d025(0x242)](logBox,_0x3448fe[_0x18d025(0x1ab)],chalk[_0x18d025(0x232)+'ht'](_0x3448fe[_0x18d025(0x23a)]));try{_0x3448fe[_0x18d025(0x1b3)](execSync,_0x3448fe[_0x18d025(0x173)],{'stdio':_0x3448fe[_0x18d025(0x252)]}),_0x4d8b3c=_0x3448fe[_0x18d025(0x2b1)],_0x3448fe[_0x18d025(0x16b)](logBox,_0x3448fe[_0x18d025(0x1ab)],chalk[_0x18d025(0x28e)+'t'](_0x3448fe[_0x18d025(0x223)]));}catch{_0x3448fe[_0x18d025(0x16b)](logBox,_0x3448fe[_0x18d025(0x1ab)],chalk[_0x18d025(0x298)](_0x3448fe[_0x18d025(0x208)]));}break;case-0x9*0x2c7+-0xe3+0x679*0x4:proxies=await _0x3448fe[_0x18d025(0x2af)](readProxies);if(_0x3448fe[_0x18d025(0x195)](proxies[_0x18d025(0x1f2)],-0xbc4+0xeaa*-0x2+0x2918))_0x3448fe[_0x18d025(0x1a5)](logBox,_0x3448fe[_0x18d025(0x1ab)],chalk[_0x18d025(0x298)](_0x3448fe[_0x18d025(0x1e5)]));else _0x3448fe[_0x18d025(0x2c0)](logBox,_0x3448fe[_0x18d025(0x1ab)],chalk[_0x18d025(0x28e)+'t'](_0x18d025(0x18d)+proxies[_0x18d025(0x1f2)]+_0x18d025(0x240)));break;case 0x84e*-0x1+-0x989*-0x1+-0x4*0x4e:_0x3448fe[_0x18d025(0x242)](logBox,_0x3448fe[_0x18d025(0x1ab)],chalk[_0x18d025(0x28e)+'t'](_0x3448fe[_0x18d025(0x2d4)]));break;default:_0x3448fe[_0x18d025(0x242)](logBox,_0x3448fe[_0x18d025(0x1ab)],chalk[_0x18d025(0x298)](_0x3448fe[_0x18d025(0x183)]));}const _0x240fee=await _0x3448fe[_0x18d025(0x2af)](askActionOption),_0x5c2a97=_0x3448fe[_0x18d025(0x195)](_0x240fee,-0x1*-0xc73+-0x1b48+0x1d*0x83)?-0xc0b+0x674*-0x1+0x1281:-0x1ea7+-0x3*-0xc28+-0x3e*0x18;let _0x277943=_0x3448fe[_0x18d025(0x1ca)];if(_0x3448fe[_0x18d025(0x286)](_0x5c2a97,0x1*-0x926+-0x10bd+-0x7*-0x3b3)){const _0x3658a4=await _0x3448fe[_0x18d025(0x2da)](askAssistantOption);_0x277943=_0x3448fe[_0x18d025(0x195)](_0x3658a4,-0x263d*0x1+-0x22c*-0x1+-0x2413*-0x1)?_0x3448fe[_0x18d025(0x2b8)]:_0x3448fe[_0x18d025(0x286)](_0x3658a4,-0x26e7+-0x154b+0x3c35*0x1)?_0x3448fe[_0x18d025(0x179)]:_0x3448fe[_0x18d025(0x1ca)];}const _0x157fd7=await _0x3448fe[_0x18d025(0x2af)](readAccounts);_0x3448fe[_0x18d025(0x242)](logBox,_0x3448fe[_0x18d025(0x219)],chalk[_0x18d025(0x2b2)+'t'](_0x18d025(0x1c1)+_0x157fd7[_0x18d025(0x1f2)]));for(let _0x582300=0x6*-0x4ff+-0x257*0x8+-0x1859*-0x2;_0x3448fe[_0x18d025(0x2a0)](_0x582300,_0x157fd7[_0x18d025(0x1f2)]);_0x582300++){const _0x501a0e=_0x157fd7[_0x582300];_0x501a0e&&(_0x4d8b3c=_0x3448fe[_0x18d025(0x267)](_0x1315db,0x6b1*-0x3+0x208*-0xe+-0x1*-0x3085)&&_0x3448fe[_0x18d025(0x2ca)](proxies[_0x18d025(0x1f2)],0x1f62+0x10b1+-0x3013)?proxies[_0x3448fe[_0x18d025(0x289)](_0x582300,proxies[_0x18d025(0x1f2)])]:_0x4d8b3c,await _0x3448fe[_0x18d025(0x16e)](processAccount,_0x501a0e,_0x4d8b3c,_0x5c2a97,_0x277943),await new Promise(_0x3b5863=>setTimeout(_0x3b5863,-0x1*0x9a40+0x1dcc*-0x2+0x14b08)));}_0x3448fe[_0x18d025(0x1b5)](logDashboard,_0x157fd7[_0x18d025(0x1f2)]);let _0x2cae49=_0x3448fe[_0x18d025(0x1d0)](_0x3448fe[_0x18d025(0x1d0)](0x382*0x8+0x1*0x22f1+-0x3efb,-0x931+-0x77c+0x10e9),-0x117a+0xcc4+0x3*0x1a6);while(_0x3448fe[_0x18d025(0x2bf)](_0x2cae49,-0x1d8b+-0x210a+0x3e95)){process[_0x18d025(0x1f9)][_0x18d025(0x1e1)](chalk[_0x18d025(0x202)](_0x18d025(0x1fe)+Math[_0x18d025(0x1f4)](_0x3448fe[_0x18d025(0x181)](_0x2cae49,0x25d9+0x7ae*-0x1+-0x101b*0x1))+':'+Math[_0x18d025(0x1f4)](_0x3448fe[_0x18d025(0x181)](_0x3448fe[_0x18d025(0x243)](_0x2cae49,0x22f6+-0x1648+-0x162*-0x1),0x1c29+0x133d+-0x2f2a))+':'+_0x3448fe[_0x18d025(0x1f3)](_0x2cae49,-0x1*-0x215+-0x493+0x2ba)+(_0x18d025(0x197)+'e\x0d'))),await new Promise(_0x1ce89f=>setTimeout(_0x1ce89f,-0x183a+0x131c+0xa*0xe7)),_0x2cae49--;}_0x3448fe[_0x18d025(0x1a3)](main);};main()[_0x228f12(0x2a4)](_0x6f27e0=>logBox(_0x228f12(0x1fa),chalk[_0x228f12(0x298)](_0x228f12(0x1e3)+_0x6f27e0[_0x228f12(0x1ee)])));
