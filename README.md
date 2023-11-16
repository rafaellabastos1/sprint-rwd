# TechnoBike

## Integrantes
Douglas Magalhães de Araujo - 552008 
<br>Gustavo Argüello Bertacci - 551304
<br>Igor Ribeiro Anccilotto - 550415
<br>Luiz Fillipe Farias - 99519
<br>Rafaella Monique do Carmo Bastos - 552425

## Link do Vercel:
https://vercel.com/rm552425-fiapcombr/sprint-rwd/A9jHkeom2VGu7Z5HmyqVcHH4CTWv

## Link do GitHub:
https://github.com/rafaellabastos1/sprint-rwd.git

## Link do repositório de Java:
Para a API funcionar, é necessário estar com o projeto de Java aberto e rodar a classe main
https://github.com/LuizFFarias/challenge-technobike-ddd.git

## Usuário e senha para entrar no SQL
Usuário: rm99519
Senha: 010205

## Endpoints
{"_type":"export","__export_format":4,"__export_date":"2023-11-16T00:05:11.507Z","__export_source":"insomnia.desktop.app:v8.4.0","resources":[{"_id":"req_cf06347d3379412186ea44191ab0d9f2","parentId":"wrk_91e5b045f9c041df86dc02fc238381cb","modified":1700092359352,"created":1700092359352,"url":"http://localhost:8080/technobike/12312312312","name":"FindOne(cpf)","description":"","method":"GET","body":{},"parameters":[],"headers":[{"name":"User-Agent","value":"insomnia/8.4.0"}],"authentication":{},"metaSortKey":-1699904847837,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"wrk_91e5b045f9c041df86dc02fc238381cb","parentId":null,"modified":1700092359304,"created":1700092359304,"name":"RWD-CHALLENGE","description":"","scope":"collection","_type":"workspace"},{"_id":"req_e460864a6ab54841ae4726b96bf5eafd","parentId":"wrk_91e5b045f9c041df86dc02fc238381cb","modified":1700092359342,"created":1700092359342,"url":"http://localhost:8080/technobike/","name":"Save","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n \"cpf\": \"12312312312\",\n  \"opcSeguro\": 1,\n  \"bikeInteira\": \"Sim\",\n  \"numSerie\": \"987654\",\n  \"roda\": \"redonda\",\n  \"freios\": \"Disco\",\n  \"guidao\": \"Curvo\",\n  \"pedais\": \"Clip\",\n  \"corrente\": \"Dupla\",\n  \"clienteBike\": \"Cliente42\",\n  \"bikeFrente\": \"sim\",\n  \"acessorios\": \"Farol\",\n  \"videoBike\": \"https://www.youtube.com/watch?v=abc12345678\",\n  \"videoPartes\": \"https://www.youtube.com/watch?v=def98765432\",\n\t\"analiseVistoria\" : \"Em análise\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/8.3.0"}],"authentication":{},"metaSortKey":-1699624815038,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_94bd954325914ef699acf4543df973c0","parentId":"wrk_91e5b045f9c041df86dc02fc238381cb","modified":1700092359327,"created":1700092359327,"url":"http://localhost:8080/technobike/","name":"Find","description":"","method":"GET","body":{},"parameters":[],"headers":[{"name":"User-Agent","value":"insomnia/8.3.0"}],"authentication":{},"metaSortKey":-1699533632755,"isPrivate":false,"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"env_6dbf1978a6b24e45ab7be70cbc0e6aa7","parentId":"wrk_91e5b045f9c041df86dc02fc238381cb","modified":1700092359309,"created":1700092359309,"name":"Base Environment","data":{},"dataPropertyOrder":null,"color":null,"isPrivate":false,"metaSortKey":1699533625177,"_type":"environment"},{"_id":"jar_5337de56a9dd4b1db76532926511b048","parentId":"wrk_91e5b045f9c041df86dc02fc238381cb","modified":1700092359321,"created":1700092359321,"name":"Default Jar","cookies":[],"_type":"cookie_jar"},{"_id":"spc_667cf7a43c20457e9073d7bd0ecdf263","parentId":"wrk_91e5b045f9c041df86dc02fc238381cb","modified":1700092359381,"created":1700092359379,"fileName":"RWD-CHALLENGE","contents":"","contentType":"yaml","_type":"api_spec"}]}