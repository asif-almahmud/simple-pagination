(this["webpackJsonpsimple-pagination"]=this["webpackJsonpsimple-pagination"]||[]).push([[0],{18:function(e,n,a){"use strict";a.r(n);var i=a(0),r=a.n(i),l=a(5),t=a.n(l),m=a(2),d=a(1);function o(e){for(var n=e.tableData,a=e.thNames,i=e.thStyle,r=e.tdProperties,l=e.tdStyle,t=a.length,m=[],o=0;o<t;o++)m.push({name:a[o]});var s=[];for(o=0;o<t;o++)s.push({name:r[o]});return Object(d.jsx)("div",{style:{margin:"1rem",width:"100%"},children:Object(d.jsxs)("table",{style:{width:"100%"},children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:m.map((function(e,n){return Object(d.jsx)("th",{style:i,children:Object(d.jsx)("span",{children:e.name})},n)}))})}),Object(d.jsx)("tbody",{children:n.map((function(e,n){return Object(d.jsx)("tr",{children:s.map((function(a){var i=a.name;return Object(d.jsx)("td",{style:l,children:Object(d.jsx)("span",{children:e[i]})},n)}))},n)}))})]})})}var s=a(6),g=a(7),c=s,h=c.length,_=function(){var e=Object(i.useState)(20),n=Object(m.a)(e,2),a=n[0],r=n[1],l=Object(i.useState)(1),t=Object(m.a)(l,2),s=t[0],_=t[1],p=Object(i.useState)(h/a),f=Object(m.a)(p,2),u=f[0],b=f[1],y=c.filter((function(e){return e.id<=s*a&&e.id>(s-1)*a}));return Object(i.useEffect)((function(){b(h/a),_(1)}),[a]),Object(d.jsxs)("div",{children:[a&&Object(d.jsx)(o,{tableData:y,thNames:["Name","Email","Gender","Phone"],tdProperties:["first_name","email","gender","phone"],thStyle:{textAlign:"center",border:"1px solid #ddd",backgroundColor:"#E5EAF0",paddingTop:"2px",paddingBottom:"2px"},tdStyle:{textAlign:"center",border:"1px solid #ddd",backgroundColor:"#edf0f4",paddingTop:"2px",paddingBottom:"2px"}}),Object(d.jsxs)("div",{style:{margin:"2rem"},children:["Number of rows to display per page"," ",Object(d.jsx)("input",{value:a,type:"number",max:100,onChange:function(e){return r(e.target.value)}})]}),a&&Object(d.jsx)(g.a,{totalPages:u,setCurrentPage:_,arrowColor:"#21385b",buttonBorderColor:"",activeBackgroundColor:"#21385b",activeDigitColor:"white",dotColor:"blue"})]})};var p=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(_,{})})};t.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":1,"first_name":"Launce","last_name":"Bygrave","email":"lbygrave0@hc360.com","gender":"Female","phone":"914-718-7291"},{"id":2,"first_name":"Bride","last_name":"Drage","email":"bdrage1@cbslocal.com","gender":"Polygender","phone":"304-116-4314"},{"id":3,"first_name":"Ettore","last_name":"Swiffen","email":"eswiffen2@nyu.edu","gender":"Genderqueer","phone":"172-317-9454"},{"id":4,"first_name":"Alyss","last_name":"Fernanando","email":"afernanando3@cisco.com","gender":"Agender","phone":"273-226-6581"},{"id":5,"first_name":"Bartholomeo","last_name":"Dogerty","email":"bdogerty4@google.com.br","gender":"Non-binary","phone":"841-709-9974"},{"id":6,"first_name":"Lonnard","last_name":"Akett","email":"lakett5@nba.com","gender":"Male","phone":"494-892-9252"},{"id":7,"first_name":"Kalil","last_name":"Holtum","email":"kholtum6@sphinn.com","gender":"Agender","phone":"894-268-0947"},{"id":8,"first_name":"Carilyn","last_name":"Parnaby","email":"cparnaby7@liveinternet.ru","gender":"Genderfluid","phone":"625-409-3059"},{"id":9,"first_name":"Menard","last_name":"Girardeau","email":"mgirardeau8@1und1.de","gender":"Male","phone":"548-511-7882"},{"id":10,"first_name":"Ichabod","last_name":"Armall","email":"iarmall9@nih.gov","gender":"Bigender","phone":"813-823-1634"},{"id":11,"first_name":"Neel","last_name":"Hand","email":"nhanda@virginia.edu","gender":"Bigender","phone":"317-850-1686"},{"id":12,"first_name":"Regan","last_name":"Bedwell","email":"rbedwellb@nydailynews.com","gender":"Polygender","phone":"905-400-0517"},{"id":13,"first_name":"Jarred","last_name":"Cannicott","email":"jcannicottc@live.com","gender":"Polygender","phone":"869-654-1545"},{"id":14,"first_name":"Janean","last_name":"O\'Lehane","email":"jolehaned@yolasite.com","gender":"Bigender","phone":"132-512-2979"},{"id":15,"first_name":"Engracia","last_name":"Griffith","email":"egriffithe@a8.net","gender":"Non-binary","phone":"564-775-2280"},{"id":16,"first_name":"Korrie","last_name":"Kirvin","email":"kkirvinf@cdc.gov","gender":"Male","phone":"894-281-1080"},{"id":17,"first_name":"Jimmy","last_name":"Houlson","email":"jhoulsong@google.cn","gender":"Bigender","phone":"944-509-6246"},{"id":18,"first_name":"Cherilyn","last_name":"Boag","email":"cboagh@dailymail.co.uk","gender":"Genderqueer","phone":"839-117-2942"},{"id":19,"first_name":"Ettore","last_name":"Gratton","email":"egrattoni@msn.com","gender":"Bigender","phone":"840-724-1914"},{"id":20,"first_name":"Hewie","last_name":"Brownfield","email":"hbrownfieldj@washingtonpost.com","gender":"Genderfluid","phone":"514-176-1794"},{"id":21,"first_name":"Cyb","last_name":"Gauler","email":"cgaulerk@samsung.com","gender":"Male","phone":"149-944-5197"},{"id":22,"first_name":"Ibby","last_name":"Somerset","email":"isomersetl@skyrock.com","gender":"Polygender","phone":"348-724-8148"},{"id":23,"first_name":"Gina","last_name":"Castellini","email":"gcastellinim@constantcontact.com","gender":"Bigender","phone":"583-988-0639"},{"id":24,"first_name":"Christi","last_name":"Kail","email":"ckailn@wunderground.com","gender":"Agender","phone":"914-370-9194"},{"id":25,"first_name":"Lurette","last_name":"Crosier","email":"lcrosiero@sakura.ne.jp","gender":"Agender","phone":"325-118-4108"},{"id":26,"first_name":"Corbie","last_name":"Beak","email":"cbeakp@nytimes.com","gender":"Non-binary","phone":"426-755-6390"},{"id":27,"first_name":"Else","last_name":"MacIlhagga","email":"emacilhaggaq@ebay.com","gender":"Genderqueer","phone":"627-299-8176"},{"id":28,"first_name":"Sula","last_name":"Jardin","email":"sjardinr@columbia.edu","gender":"Polygender","phone":"661-246-7276"},{"id":29,"first_name":"Elana","last_name":"Snowman","email":"esnowmans@barnesandnoble.com","gender":"Polygender","phone":"227-623-5704"},{"id":30,"first_name":"Hedwiga","last_name":"Jellyman","email":"hjellymant@microsoft.com","gender":"Female","phone":"120-756-5858"},{"id":31,"first_name":"Mack","last_name":"Etteridge","email":"metteridgeu@istockphoto.com","gender":"Genderfluid","phone":"335-243-3886"},{"id":32,"first_name":"Melisse","last_name":"Maureen","email":"mmaureenv@virginia.edu","gender":"Agender","phone":"848-277-0723"},{"id":33,"first_name":"Sibby","last_name":"Asker","email":"saskerw@gmpg.org","gender":"Agender","phone":"989-359-3316"},{"id":34,"first_name":"Maurine","last_name":"Aglione","email":"maglionex@fda.gov","gender":"Bigender","phone":"436-462-1418"},{"id":35,"first_name":"Allis","last_name":"Bromet","email":"abromety@deviantart.com","gender":"Genderfluid","phone":"790-474-9640"},{"id":36,"first_name":"Sean","last_name":"Exer","email":"sexerz@nih.gov","gender":"Non-binary","phone":"275-426-5682"},{"id":37,"first_name":"Marlie","last_name":"Kochs","email":"mkochs10@ebay.co.uk","gender":"Male","phone":"946-989-3288"},{"id":38,"first_name":"Lenci","last_name":"Yude","email":"lyude11@netvibes.com","gender":"Genderfluid","phone":"793-987-6448"},{"id":39,"first_name":"Dalston","last_name":"Burrass","email":"dburrass12@tinypic.com","gender":"Female","phone":"766-438-9062"},{"id":40,"first_name":"Valery","last_name":"Anespie","email":"vanespie13@wikispaces.com","gender":"Polygender","phone":"877-299-7085"},{"id":41,"first_name":"Lucia","last_name":"Lindfors","email":"llindfors14@loc.gov","gender":"Genderfluid","phone":"582-466-6354"},{"id":42,"first_name":"Cassius","last_name":"Jayne","email":"cjayne15@cbslocal.com","gender":"Female","phone":"495-670-4593"},{"id":43,"first_name":"Erena","last_name":"Aguirrezabala","email":"eaguirrezabala16@twitter.com","gender":"Bigender","phone":"858-596-9499"},{"id":44,"first_name":"Marieann","last_name":"Dadds","email":"mdadds17@ovh.net","gender":"Agender","phone":"550-564-6022"},{"id":45,"first_name":"Teriann","last_name":"Lightwing","email":"tlightwing18@youtu.be","gender":"Male","phone":"837-971-9541"},{"id":46,"first_name":"Kristina","last_name":"Yoxen","email":"kyoxen19@fda.gov","gender":"Polygender","phone":"583-884-7586"},{"id":47,"first_name":"Cristie","last_name":"Eringey","email":"ceringey1a@gnu.org","gender":"Genderfluid","phone":"162-110-4219"},{"id":48,"first_name":"Desmond","last_name":"McDuff","email":"dmcduff1b@boston.com","gender":"Genderqueer","phone":"990-777-2262"},{"id":49,"first_name":"Glenn","last_name":"Fallanche","email":"gfallanche1c@hao123.com","gender":"Bigender","phone":"375-484-6108"},{"id":50,"first_name":"Remy","last_name":"Cummins","email":"rcummins1d@reuters.com","gender":"Genderfluid","phone":"177-218-0887"},{"id":51,"first_name":"Clerkclaude","last_name":"Goodfield","email":"cgoodfield1e@dell.com","gender":"Agender","phone":"561-114-7702"},{"id":52,"first_name":"Xylia","last_name":"Saines","email":"xsaines1f@nyu.edu","gender":"Genderfluid","phone":"488-775-6258"},{"id":53,"first_name":"Patten","last_name":"Murrish","email":"pmurrish1g@uiuc.edu","gender":"Non-binary","phone":"772-504-4835"},{"id":54,"first_name":"Clevey","last_name":"Strooband","email":"cstrooband1h@artisteer.com","gender":"Genderqueer","phone":"789-394-5952"},{"id":55,"first_name":"Lizette","last_name":"Madsen","email":"lmadsen1i@123-reg.co.uk","gender":"Male","phone":"327-765-9447"},{"id":56,"first_name":"Philippe","last_name":"Sooper","email":"psooper1j@aol.com","gender":"Polygender","phone":"978-826-2248"},{"id":57,"first_name":"Deina","last_name":"Bartolini","email":"dbartolini1k@rakuten.co.jp","gender":"Male","phone":"313-266-4530"},{"id":58,"first_name":"Elwira","last_name":"MacAllan","email":"emacallan1l@posterous.com","gender":"Female","phone":"477-966-3184"},{"id":59,"first_name":"Nikki","last_name":"Tribble","email":"ntribble1m@ovh.net","gender":"Male","phone":"434-596-9290"},{"id":60,"first_name":"Evin","last_name":"Binstead","email":"ebinstead1n@oracle.com","gender":"Female","phone":"665-519-4679"},{"id":61,"first_name":"Lothaire","last_name":"Cornehl","email":"lcornehl1o@about.com","gender":"Genderqueer","phone":"693-646-1018"},{"id":62,"first_name":"Christel","last_name":"Menault","email":"cmenault1p@google.com.br","gender":"Bigender","phone":"964-633-9800"},{"id":63,"first_name":"Angele","last_name":"Hammonds","email":"ahammonds1q@imdb.com","gender":"Female","phone":"518-993-4646"},{"id":64,"first_name":"Alvan","last_name":"Gabel","email":"agabel1r@twitpic.com","gender":"Male","phone":"513-444-8492"},{"id":65,"first_name":"Colin","last_name":"Baine","email":"cbaine1s@bandcamp.com","gender":"Male","phone":"951-905-8632"},{"id":66,"first_name":"Ludovico","last_name":"Barthrop","email":"lbarthrop1t@uiuc.edu","gender":"Polygender","phone":"696-933-8686"},{"id":67,"first_name":"Dale","last_name":"Hillatt","email":"dhillatt1u@cnet.com","gender":"Bigender","phone":"125-533-6066"},{"id":68,"first_name":"Franzen","last_name":"Mussetti","email":"fmussetti1v@columbia.edu","gender":"Bigender","phone":"585-807-7141"},{"id":69,"first_name":"Sonni","last_name":"Kenna","email":"skenna1w@state.gov","gender":"Polygender","phone":"805-530-1534"},{"id":70,"first_name":"Pippa","last_name":"Jelfs","email":"pjelfs1x@google.nl","gender":"Polygender","phone":"360-791-2439"},{"id":71,"first_name":"Raychel","last_name":"Baulcombe","email":"rbaulcombe1y@free.fr","gender":"Male","phone":"344-399-2208"},{"id":72,"first_name":"Michelina","last_name":"Rait","email":"mrait1z@1688.com","gender":"Polygender","phone":"466-277-5541"},{"id":73,"first_name":"Kristien","last_name":"Lindman","email":"klindman20@europa.eu","gender":"Agender","phone":"898-387-5819"},{"id":74,"first_name":"Worthy","last_name":"Gornar","email":"wgornar21@gnu.org","gender":"Agender","phone":"139-474-0050"},{"id":75,"first_name":"Donni","last_name":"Tubbles","email":"dtubbles22@163.com","gender":"Polygender","phone":"528-766-2953"},{"id":76,"first_name":"Wayne","last_name":"Chasles","email":"wchasles23@sciencedirect.com","gender":"Genderqueer","phone":"214-423-3067"},{"id":77,"first_name":"Kassandra","last_name":"Steptowe","email":"ksteptowe24@admin.ch","gender":"Genderfluid","phone":"814-993-6499"},{"id":78,"first_name":"Nichole","last_name":"Cottel","email":"ncottel25@adobe.com","gender":"Male","phone":"337-235-1891"},{"id":79,"first_name":"Claresta","last_name":"Sextone","email":"csextone26@netlog.com","gender":"Genderqueer","phone":"956-836-1063"},{"id":80,"first_name":"Benton","last_name":"Easthope","email":"beasthope27@google.ca","gender":"Male","phone":"360-898-5160"},{"id":81,"first_name":"Nikkie","last_name":"Ebrall","email":"nebrall28@theglobeandmail.com","gender":"Agender","phone":"608-975-0390"},{"id":82,"first_name":"Mollie","last_name":"Leaney","email":"mleaney29@flickr.com","gender":"Bigender","phone":"271-654-2173"},{"id":83,"first_name":"Lainey","last_name":"Madelin","email":"lmadelin2a@1und1.de","gender":"Non-binary","phone":"536-820-2147"},{"id":84,"first_name":"Cyril","last_name":"Wharram","email":"cwharram2b@hatena.ne.jp","gender":"Genderqueer","phone":"522-914-5326"},{"id":85,"first_name":"Barry","last_name":"Macia","email":"bmacia2c@lulu.com","gender":"Non-binary","phone":"471-326-6246"},{"id":86,"first_name":"Nisse","last_name":"Briiginshaw","email":"nbriiginshaw2d@oracle.com","gender":"Female","phone":"876-213-3165"},{"id":87,"first_name":"Bronson","last_name":"Cann","email":"bcann2e@opera.com","gender":"Agender","phone":"354-202-1806"},{"id":88,"first_name":"Rowena","last_name":"Ryan","email":"rryan2f@deviantart.com","gender":"Bigender","phone":"319-831-5261"},{"id":89,"first_name":"Adelice","last_name":"Delacoste","email":"adelacoste2g@aol.com","gender":"Bigender","phone":"283-399-0540"},{"id":90,"first_name":"Leta","last_name":"Baldini","email":"lbaldini2h@yellowpages.com","gender":"Non-binary","phone":"318-754-5840"},{"id":91,"first_name":"Tanney","last_name":"Brydon","email":"tbrydon2i@buzzfeed.com","gender":"Genderqueer","phone":"438-161-3291"},{"id":92,"first_name":"Hedwig","last_name":"Witch","email":"hwitch2j@163.com","gender":"Genderfluid","phone":"623-167-7609"},{"id":93,"first_name":"Florry","last_name":"Bossel","email":"fbossel2k@loc.gov","gender":"Male","phone":"971-389-1686"},{"id":94,"first_name":"Lewie","last_name":"Ferroli","email":"lferroli2l@nymag.com","gender":"Agender","phone":"304-274-8614"},{"id":95,"first_name":"Diane","last_name":"Cambell","email":"dcambell2m@addthis.com","gender":"Bigender","phone":"500-608-8885"},{"id":96,"first_name":"Lisle","last_name":"Volkers","email":"lvolkers2n@nature.com","gender":"Male","phone":"910-741-8510"},{"id":97,"first_name":"Glendon","last_name":"Aleksahkin","email":"galeksahkin2o@dropbox.com","gender":"Male","phone":"514-156-3231"},{"id":98,"first_name":"Sherill","last_name":"Imort","email":"simort2p@canalblog.com","gender":"Genderqueer","phone":"519-658-6107"},{"id":99,"first_name":"Wheeler","last_name":"Poulston","email":"wpoulston2q@yahoo.com","gender":"Polygender","phone":"904-556-0828"},{"id":100,"first_name":"Seamus","last_name":"Elsegood","email":"selsegood2r@example.com","gender":"Female","phone":"447-744-8379"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.b1ab5686.chunk.js.map