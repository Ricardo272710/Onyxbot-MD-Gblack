import _0x18f689 from'node-fetch';const handler=async(_0x5b0491,{conn:_0x529aa4,text:_0xa82951,usedPrefix:_0x55560a,command:_0x130d76})=>{if(!_0xa82951)throw'*[❗]\x20Ingresa\x20un\x20texto\x20para\x20buscar,\x20ejemplo:\x20'+(_0x55560a+_0x130d76)+'\x20Goku-Black-Lite-MD*';const _0x2cfe5f=await _0x18f689(global['API']('https://api.github.com','/search/repositories',{'q':_0xa82951})),_0x2312c0=await _0x2cfe5f['json']();if(_0x2cfe5f['status']!==0xc8)throw _0x2312c0;const _0x59858a=_0x2312c0['items']['map']((_0x577883,_0x4433b3)=>{return('\x0a*'+(0x1+_0x4433b3)+'.\x20'+_0x577883['full_name']+(_0x577883['fork']?'\x20(fork)':'')+'*\x0a🔗\x20*Url:*\x20'+_0x577883['html_url']+'\x0a📅\x20*Creado\x20el:*\x20'+formatDate(_0x577883['created_at'])+'\x0a🔄\x20*Actualizado\x20el:*\x20'+formatDate(_0x577883['updated_at'])+'\x0a📥\x20*Clone:*\x20$\x20git\x20clone\x20'+_0x577883['clone_url']+'\x0a👁\x20'+_0x577883['watchers']+'\x20◉\x20🍴\x20'+_0x577883['forks']+'\x20◉\x20⭐\x20'+_0x577883['stargazers_count']+'\x20◉\x20❓\x20\x0a'+(_0x577883['description']?'📝\x20*Descripción:*\x0a'+_0x577883['description']:'')+'\x0a')['trim']();})['join']('\x0a\x0a◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\x0a\x0a');_0x529aa4['sendMessage'](_0x5b0491['chat'],{'text':_0x59858a['trim']()},{'quoted':_0x5b0491});};handler['help']=['githubs'],handler['tags']=['buscadores'],handler['command']=/^(ghs|githubs|githubs|githubsearch|gits|gitsearch)$/i,handler['register']=!![],handler['group']=!![];export default handler;function formatDate(_0x287a17,_0x4f4d79='es'){const _0xa71982=new Date(_0x287a17);return _0xa71982['toLocaleDateString'](_0x4f4d79,{'weekday':'long','day':'numeric','month':'long','year':'numeric','hour':'numeric','minute':'numeric','second':'numeric'});}
