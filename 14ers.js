class Mountain {
    constructor(name, range, altitude, difficulty, miles, elev_gain, url, date_completed) {
      this.name = name;
      this.range = range;
      this.altitude = altitude;
      this.difficulty = difficulty;
      this.miles = miles;
      this.elev_gain = elev_gain;
      this.url = url;
      this.date_completed = date_completed;
    }
    get name_(){
        return this.name;
    }
    get range_(){
        return this.range;
    }
    get altitude_(){
        return this.altitude;
    }
    get difficulty_(){
        return this.difficulty;
    }
    get miles_(){
        return this.miles;
    }
    get elev_gain_(){
        return this.elev_gain;
    }
    get url_(){
        return this.url;
    }
    get date_completed_(){
        return this.date_completed;
    }
  }

class Range{
    constructor(name, mountains){
        this.name = name;
        this.mountains = mountains; 
    }
    get name_(){
        return this.name;
    }
    get mountains_(){
        return this.mountains;
    }
    addMountain(mountain){
        this.mountains.push(mountain);
    }
    total_mountains(){
        return this.mountains.length;
    }
    calcTotalClimbed(){
        climbed = 0;
        this.mountains.forEach(m =>{
            if(m.date_completed_ != "00/00/0000"){
                climbed += 1
            }
        });
        return climbed;
    }
}  


function init(){
    // fetch("14er.csv")
    // .then(r=>r.text())
    // .then(text => {
    text = "ID,Mountain Peak,Mountain Range,Elevation_ft,fourteener,Prominence_ft,Isolation_mi,Lat,Long,Standard Route,Distance_mi,Elevation Gain_ft,Difficulty,Traffic Low,Traffic High,photo\n1,Mount Elbert,Sawatch Range,14440,Y,9093,670,39.1178,-106.4454,Northeast Ridge ,9.5,4700,Class 1,20000,25000,https://www.14ers.com/photos/mtelbert/peakphotos/large/201207_Elbert01.jpg\n2,Mount Massive,Sawatch Range,14428,Y,1961,5.06,39.1875,-106.4757,East Slopes ,14.5,4500,Class 2,7000,10000,https://www.14ers.com/photos/mtmassive/peakphotos/large/200508_Massive01.jpg\n3,Mount Harvard,Sawatch Range,14421,Y,2360,14.93,38.9244,-106.3207,South Slopes ,14,4600,Class 2,5000,7000,https://www.14ers.com/photos/harvardgroup/peakphotos/large/200706_Harv01.jpg\n4,Blanca Peak,Sangre de Cristo Range,14351,Y,5326,103.4,37.5775,-105.4856,Northwest Ridge ,17,6500,Hard Class 2,1000,3000,https://www.14ers.com/photos/blancagroup/peakphotos/large/200607_Blanca01.jpg\n5,La Plata Peak,Sawatch Range,14343,Y,1836,6.28,39.0294,-106.4729,Northwest Ridge ,9.25,4500,Class 2,5000,7000,https://www.14ers.com/photos/laplatapeak/peakphotos/large/201205_Lap01.jpg\n6,Uncompahgre Peak,San Juan Mountains,14321,Y,4277,85.1,38.0717,-107.4621,South Ridge ,7.5,3000,Class 2,3000,5000,https://www.14ers.com/photos/uncompahgrepeak/peakphotos/large/201710_Unco01.jpg\n7,Crestone Peak,Sangre de Cristo Range,14300,Y,4554,27.4,37.9669,-105.5855,South Face ,14,5700,Class 3,1000,3000,https://www.14ers.com/photos/crestonegroup/peakphotos/large/201607_Crestones01.jpg\n8,Mount Lincoln,Mosquito Range,14293,Y,3862,22.6,39.3515,-106.1116,West Ridge ,6,2600,Class 2,15000,20000,https://www.14ers.com/photos/lincolngroup/peakphotos/large/200904_LinBro01.jpg\n9,Castle Peak,Elk Mountains,14279,Y,2365,20.9,39.0097,-106.8614,Northeast Ridge ,13.5,4600,Hard Class 2,1000,3000,https://www.14ers.com/photos/castlegroup/peakphotos/large/200807_Cast04.jpg\n10,Grays Peak,Front Range,14278,Y,2770,25,39.6339,-105.8176,North Slopes ,8,3000,Class 1,25000,30000,https://www.14ers.com/photos/graystorreys/peakphotos/large/201211_Grays01.jpg\n11,Mount Antero,Sawatch Range,14276,Y,2503,17.75,38.6741,-106.2462,West Slopes ,16,5200,Class 2,3000,5000,https://www.14ers.com/photos/mtantero/peakphotos/large/201205_Ant01.jpg\n12,Torreys Peak,Front Range,14275,Y,560,0.65,39.6428,-105.8212,South Slopes ,8,3000,Class 2,25000,30000,https://www.14ers.com/photos/graystorreys/peakphotos/large/201004_Grays01.jpg\n13,Quandary Peak,Mosquito Range,14271,Y,1125,3.16,39.3973,-106.1064,East Ridge ,6.75,3450,Class 1,20000,25000,https://www.14ers.com/photos/quandarypeak/peakphotos/large/200701_Quan02.jpg\n14,Mount Evans,Front Range,14271,Y,2770,9.79,39.5883,-105.6438,West Ridge via Mount Spalding ,5,2000,Class 2,15000,20000,https://www.14ers.com/photos/evansgroup/peakphotos/large/200907_Evans01.jpg\n15,Longs Peak,Front Range,14259,Y,2940,43.6,40.255,-105.6151,Keyhole Route ,14.5,5100,Class 3,15000,20000,https://www.14ers.com/photos/longspeak/peakphotos/large/200508_Longs01.jpg\n16,Mount Wilson,San Juan Mountains,14252,Y,4024,33.1,37.8391,-107.9916,North Slopes ,16,5100,Class 4,1000,3000,https://www.14ers.com/photos/wilsongroup/peakphotos/large/200803_Wils01.jpg\n17,Mount Shavano,Sawatch Range,14231,Y,1619,3.78,38.6192,-106.2393,East Slopes ,9,4600,Class 2,5000,7000,https://www.14ers.com/photos/shavanogroup/peakphotos/large/200804_Shav01.jpg\n18,Mount Princeton,Sawatch Range,14204,Y,2177,5.19,38.7492,-106.2424,East Slopes ,6.5,3200,Class 2,5000,7000,https://www.14ers.com/photos/mtprinceton/peakphotos/large/200904_Prin01.jpg\n19,Mount Belford,Sawatch Range,14203,Y,1337,3.3,38.9607,-106.3607,Northwest Ridge ,8,4500,Class 2,5000,7000,https://www.14ers.com/photos/belfordgroup/peakphotos/large/201204_Belf01.jpg\n20,Crestone Needle,Sangre de Cristo Range,14203,Y,457,0.45,37.9647,-105.5766,South Face ,12,4400,Class 3,1000,3000,https://www.14ers.com/photos/crestonegroup/peakphotos/large/201104_CNeed01.jpg\n21,Mount Yale,Sawatch Range,14200,Y,1896,5.55,38.8442,-106.3138,Southwest Slopes ,9.5,4300,Class 2,5000,7000,https://www.14ers.com/photos/mtyale/peakphotos/large/201004_Yale02.jpg\n22,Mount Bross,Mosquito Range,14178,Y,312,0.99,39.3354,-106.1077,West Slopes ,3.25,2250,Class 2,15000,20000,https://www.14ers.com/photos/lincolngroup/peakphotos/large/200505_Bross01.jpg\n23,Kit Carson Mountain,Sangre de Cristo Range,14171,Y,1025,1.27,37.9797,-105.6026,Via Challenger Point ,14.5,6250,Easy Class 3,1000,3000,https://www.14ers.com/photos/kitcarsongroup/peakphotos/large/201107_kitcar02.jpg\n24,Maroon Peak,Elk Mountains,14163,Y,2336,8.06,39.0708,-106.989,South ridge ,11.5,4800,Class 3,1000,3000,https://www.14ers.com/photos/maroongroup/peakphotos/large/201807_Maro02.jpg\n25,Tabeguache Peak,Sawatch Range,14162,Y,455,0.75,38.6255,-106.2509,Via Mount Shavano ,11,5600,Class 2,5000,7000,https://www.14ers.com/photos/shavanogroup/peakphotos/large/201005_Tabe01.jpg\n26,Mount Oxford (Colorado),Sawatch Range,14160,Y,653,1.22,38.9648,-106.3388,Via Mount Belford ,11,5800,Class 2,5000,7000,https://www.14ers.com/photos/belfordgroup/peakphotos/large/200508_Oxfo01.jpg\n27,Mount Sneffels,San Juan Mountains,14158,Y,3050,15.73,38.0038,-107.7923,South Slopes ,6,2900,Easy Class 3,3000,5000,https://www.14ers.com/photos/mtsneffels/peakphotos/large/200808_Snef23.jpg\n28,Mount Democrat,Mosquito Range,14155,Y,768,1.27,39.3396,-106.14,East Slope ,4,2150,Class 2,15000,20000,https://www.14ers.com/photos/lincolngroup/peakphotos/large/201706_Demo01.jpg\n29,Capitol Peak,Elk Mountains,14137,Y,1750,7.44,39.1503,-107.0829,Northeast Ridge ,17,5300,Class 4,1000,3000,https://www.14ers.com/photos/capitolpeak/peakphotos/large/200807_Capi02.jpg\n30,Pikes Peak,Front Range,14115,Y,5530,60.8,38.8405,-105.0442,East Slopes ,26,7500,Class 1,15000,20000,https://www.14ers.com/photos/pikespeak/peakphotos/large/201506_Pikes01.jpg\n31,Snowmass Mountain,Elk Mountains,14099,Y,1152,2.34,39.1188,-107.0665,East Slopes ,22,5800,Hard Class 3,1000,3000,https://www.14ers.com/photos/snowmassmtn/peakphotos/large/200907_Snow01.jpg\n32,Windom Peak,San Juan Mountains,14093,Y,2187,26.4,37.6212,-107.5919,West Ridge ,17,6000,Hard Class 2,3000,5000,https://www.14ers.com/photos/windomgroup/peakphotos/large/200607_Wind01.jpg\n33,Mount Eolus,San Juan Mountains,14090,Y,1024,1.69,37.6218,-107.6227,Northeast Ridge ,17,6100,Class 3,3000,5000,https://www.14ers.com/photos/windomgroup/peakphotos/large/200607_Eolus01.jpg\n34,Challenger Point,Sangre de Cristo Range,14087,Y,301,0.22,37.9804,-105.6066,North Slope ,12.5,5400,Hard Class 2,1000,3000,https://www.14ers.com/photos/kitcarsongroup/peakphotos/large/200707_chal01.jpg\n35,Mount Columbia,Sawatch Range,14077,Y,893,1.9,38.9039,-106.2975,West Slopes ,11.5,4250,Class 2,3000,5000,https://www.14ers.com/photos/harvardgroup/peakphotos/large/201005_Colu01.jpg\n36,Missouri Mountain,Sawatch Range,14074,Y,847,1.31,38.9476,-106.3785,Northwest Ridge ,10.5,4500,Class 2,3000,5000,https://www.14ers.com/photos/belfordgroup/peakphotos/large/200706_Miss01.jpg\n37,Humboldt Peak,Sangre de Cristo Range,14070,Y,1204,1.41,37.9762,-105.5552,West Ridge ,11,4200,Class 2,1000,3000,https://www.14ers.com/photos/crestonegroup/peakphotos/large/201607_Humb01.jpg\n38,Mount Bierstadt,Front Range,14065,Y,720,1.12,39.5826,-105.6688,West Slopes ,7,2850,Class 2,35000,40000,https://www.14ers.com/photos/evansgroup/peakphotos/large/200607_Bier01.jpg\n39,Sunlight Peak,San Juan Mountains,14065,Y,399,0.48,37.6274,-107.5959,South Face ,17,6000,Class 4,3000,5000,https://www.14ers.com/photos/windomgroup/peakphotos/large/200708_Sunl01.jpg\n40,Handies Peak,San Juan Mountains,14058,Y,1908,11.18,37.913,-107.5044,Southwest Slopes ,5.75,2500,Class 1,5000,7000,https://www.14ers.com/photos/handiespeak/peakphotos/large/200707_Hand03.jpg\n41,Culebra Peak,Sangre de Cristo Range,14053,Y,4827,35.5,37.1224,-105.1858,Northwest Ridge ,5,2700,Class 2,1000,3000,https://www.14ers.com/photos/culebrapeak/peakphotos/large/201508_Cule01.jpg\n42,Ellingwood Point,Sangre de Cristo Range,14048,Y,342,0.52,37.5826,-105.4927,South Face ,17,6200,Hard Class 2,1000,3000,https://www.14ers.com/photos/blancagroup/peakphotos/large/200607_Elli01.jpg\n43,Mount Lindsey,Sangre de Cristo Range,14048,Y,1542,2.26,37.5837,-105.4449,Northwest Gully ,8.25,3500,Easy Class 3,1000,3000,https://www.14ers.com/photos/mtlindsey/peakphotos/large/200606_Lind01.jpg\n44,Little Bear Peak,Sangre de Cristo Range,14043,Y,377,0.98,37.5666,-105.4972,West Ridge and Southwest Face ,14,6200,Class 4,1000,3000,https://www.14ers.com/photos/blancagroup/peakphotos/large/200607_Litt01.jpg\n45,Mount Sherman,Mosquito Range,14043,Y,850,8.06,39.225,-106.1699,Southwest Ridge ,5.25,2100,Class 2,20000,25000,https://www.14ers.com/photos/mtsherman/peakphotos/large/201207_Sher02.jpg\n46,Redcloud Peak,San Juan Mountains,14041,Y,1436,4.91,37.941,-107.4219,Northeast Ridge ,9,3700,Class 2,3000,5000,https://www.14ers.com/photos/redcloudgroup/peakphotos/large/201610_Redc02.jpg\n47,Pyramid Peak,Elk Mountains,14025,Y,1638,2.09,39.0717,-106.9502,Northeast Ridge ,8.25,4500,Class 4,1000,3000,https://www.14ers.com/photos/maroongroup/peakphotos/large/200807_Pyra01.jpg\n48,Wilson Peak,San Juan Mountains,14023,Y,857,1.51,37.8603,-107.9847,Southwest Ridge ,10,5000,Class 3,1000,3000,https://www.14ers.com/photos/wilsongroup/peakphotos/large/200604_Wils01.jpg\n49,San Luis Peak,San Juan Mountains,14022,Y,3113,27,37.9868,-106.9313,Northeast Ridge ,13.5,3600,Class 1,3000,5000,https://www.14ers.com/photos/sanluispeak/peakphotos/large/201807_San01.jpg\n50,Wetterhorn Peak,San Juan Mountains,14021,Y,1635,2.77,38.0607,-107.5109,Southeast Ridge ,7,3300,Class 3,3000,5000,https://www.14ers.com/photos/wetterhornpeak/peakphotos/large/201106_Wett01.jpg\n51,Mount of the Holy Cross,Sawatch Range,14011,Y,2113,18.52,39.4668,-106.4817,North Ridge ,12,5600,Class 2,3000,5000,https://www.14ers.com/photos/mtholycross/peakphotos/large/200706_Holy01.jpg\n52,Huron Peak,Sawatch Range,14010,Y,1423,3.21,38.9455,-106.4381,Northwest Slopes ,6.5,3500,Class 2,5000,7000,https://www.14ers.com/photos/huronpeak/peakphotos/large/201607_Huro01.jpg\n53,Sunshine Peak,San Juan Mountains,14007,Y,501,1.27,37.9228,-107.4256,Via Redcloud Peak ,12.25,4800,Class 2,3000,5000,https://www.14ers.com/photos/redcloudgroup/peakphotos/large/200606_Sun01.jpg\n54,Mt. Cameron,Mosquito Range,14238,N,158,0.48,39.347165,-106.118501,West Ridge ,4.75,2250,Class 2,15000,20000,https://www.14ers.com/photos/lincolngroup/peakphotos/large/200505_Linc01.jpg\n55,El Diente Peak,San Juan Mountains,14159,N,239,0.75,37.839383,-108.005335,North Slopes ,15,5000,Class 3,1000,3000,https://www.14ers.com/photos/wilsongroup/peakphotos/large/201007_ElD01.jpg\n56,Conundrum Peak,Elk Mountains,14060,N,280,0.4,39.015682,-106.862749,Via Castle Peak ,14.5,4850,Hard Class 2,1000,3000,https://www.14ers.com/photos/castlegroup/peakphotos/large/200807_Cast01.jpg\n57,North Eolus,San Juan Mountains,14039,N,199,0.25,37.625192,-107.621187,South Ridge ,16.75,6000,Class 3,3000,5000,https://www.14ers.com/photos/windomgroup/peakphotos/large/200607_Eolus01.jpg\n58,North Maroon Peak,Elk Mountains,14014,N,254,0.37,39.076007,-106.987058,Northeast Ridge ,9.25,4500,Class 4,1000,3000,https://www.14ers.com/photos/maroongroup/peakphotos/large/200807_NMar01.jpg\n"
    lines = text.split("\n");
    m_rows = []
    lines.forEach(l => {
        m_rows.push(l.split(","));
    });
        lines = text.split("\n");
        m_rows = []
        lines.forEach(l => {
            m_rows.push(l.split(","));
        });
        console.log(m_rows);
        m_rows.forEach(mountain =>{
            localStorage.setItem(mountain[1], "00/00/0000");
        });
        console.log(localStorage.getItem("Mount Massive"));
    // })
}


if (localStorage.length == 0) {
    init();
}

function add14er(form) {
    m_value = form.mountains.value;
    d_value = form.date.value;
    console.log(m_value);
    console.log(d_value);
    m = document.getElementById(m_value);
    console.log(m.childNodes);
    m.childNodes[6].innerHTML = d_value;
    m.childNodes[7].setAttribute("class", "complete");
    localStorage.setItem(m_value, d_value);
}

function start(){
//     localStorage.setItem("Mount Elbert", "09/24/2023");
//     fetch("14er.txt")
// .then(r=>r.text())
// .then(text => {
    text = "ID,Mountain Peak,Mountain Range,Elevation_ft,fourteener,Prominence_ft,Isolation_mi,Lat,Long,Standard Route,Distance_mi,Elevation Gain_ft,Difficulty,Traffic Low,Traffic High,photo\n1,Mount Elbert,Sawatch Range,14440,Y,9093,670,39.1178,-106.4454,Northeast Ridge ,9.5,4700,Class 1,20000,25000,https://www.14ers.com/photos/mtelbert/peakphotos/large/201207_Elbert01.jpg\n2,Mount Massive,Sawatch Range,14428,Y,1961,5.06,39.1875,-106.4757,East Slopes ,14.5,4500,Class 2,7000,10000,https://www.14ers.com/photos/mtmassive/peakphotos/large/200508_Massive01.jpg\n3,Mount Harvard,Sawatch Range,14421,Y,2360,14.93,38.9244,-106.3207,South Slopes ,14,4600,Class 2,5000,7000,https://www.14ers.com/photos/harvardgroup/peakphotos/large/200706_Harv01.jpg\n4,Blanca Peak,Sangre de Cristo Range,14351,Y,5326,103.4,37.5775,-105.4856,Northwest Ridge ,17,6500,Hard Class 2,1000,3000,https://www.14ers.com/photos/blancagroup/peakphotos/large/200607_Blanca01.jpg\n5,La Plata Peak,Sawatch Range,14343,Y,1836,6.28,39.0294,-106.4729,Northwest Ridge ,9.25,4500,Class 2,5000,7000,https://www.14ers.com/photos/laplatapeak/peakphotos/large/201205_Lap01.jpg\n6,Uncompahgre Peak,San Juan Mountains,14321,Y,4277,85.1,38.0717,-107.4621,South Ridge ,7.5,3000,Class 2,3000,5000,https://www.14ers.com/photos/uncompahgrepeak/peakphotos/large/201710_Unco01.jpg\n7,Crestone Peak,Sangre de Cristo Range,14300,Y,4554,27.4,37.9669,-105.5855,South Face ,14,5700,Class 3,1000,3000,https://www.14ers.com/photos/crestonegroup/peakphotos/large/201607_Crestones01.jpg\n8,Mount Lincoln,Mosquito Range,14293,Y,3862,22.6,39.3515,-106.1116,West Ridge ,6,2600,Class 2,15000,20000,https://www.14ers.com/photos/lincolngroup/peakphotos/large/200904_LinBro01.jpg\n9,Castle Peak,Elk Mountains,14279,Y,2365,20.9,39.0097,-106.8614,Northeast Ridge ,13.5,4600,Hard Class 2,1000,3000,https://www.14ers.com/photos/castlegroup/peakphotos/large/200807_Cast04.jpg\n10,Grays Peak,Front Range,14278,Y,2770,25,39.6339,-105.8176,North Slopes ,8,3000,Class 1,25000,30000,https://www.14ers.com/photos/graystorreys/peakphotos/large/201211_Grays01.jpg\n11,Mount Antero,Sawatch Range,14276,Y,2503,17.75,38.6741,-106.2462,West Slopes ,16,5200,Class 2,3000,5000,https://www.14ers.com/photos/mtantero/peakphotos/large/201205_Ant01.jpg\n12,Torreys Peak,Front Range,14275,Y,560,0.65,39.6428,-105.8212,South Slopes ,8,3000,Class 2,25000,30000,https://www.14ers.com/photos/graystorreys/peakphotos/large/201004_Grays01.jpg\n13,Quandary Peak,Mosquito Range,14271,Y,1125,3.16,39.3973,-106.1064,East Ridge ,6.75,3450,Class 1,20000,25000,https://www.14ers.com/photos/quandarypeak/peakphotos/large/200701_Quan02.jpg\n14,Mount Evans,Front Range,14271,Y,2770,9.79,39.5883,-105.6438,West Ridge via Mount Spalding ,5,2000,Class 2,15000,20000,https://www.14ers.com/photos/evansgroup/peakphotos/large/200907_Evans01.jpg\n15,Longs Peak,Front Range,14259,Y,2940,43.6,40.255,-105.6151,Keyhole Route ,14.5,5100,Class 3,15000,20000,https://www.14ers.com/photos/longspeak/peakphotos/large/200508_Longs01.jpg\n16,Mount Wilson,San Juan Mountains,14252,Y,4024,33.1,37.8391,-107.9916,North Slopes ,16,5100,Class 4,1000,3000,https://www.14ers.com/photos/wilsongroup/peakphotos/large/200803_Wils01.jpg\n17,Mount Shavano,Sawatch Range,14231,Y,1619,3.78,38.6192,-106.2393,East Slopes ,9,4600,Class 2,5000,7000,https://www.14ers.com/photos/shavanogroup/peakphotos/large/200804_Shav01.jpg\n18,Mount Princeton,Sawatch Range,14204,Y,2177,5.19,38.7492,-106.2424,East Slopes ,6.5,3200,Class 2,5000,7000,https://www.14ers.com/photos/mtprinceton/peakphotos/large/200904_Prin01.jpg\n19,Mount Belford,Sawatch Range,14203,Y,1337,3.3,38.9607,-106.3607,Northwest Ridge ,8,4500,Class 2,5000,7000,https://www.14ers.com/photos/belfordgroup/peakphotos/large/201204_Belf01.jpg\n20,Crestone Needle,Sangre de Cristo Range,14203,Y,457,0.45,37.9647,-105.5766,South Face ,12,4400,Class 3,1000,3000,https://www.14ers.com/photos/crestonegroup/peakphotos/large/201104_CNeed01.jpg\n21,Mount Yale,Sawatch Range,14200,Y,1896,5.55,38.8442,-106.3138,Southwest Slopes ,9.5,4300,Class 2,5000,7000,https://www.14ers.com/photos/mtyale/peakphotos/large/201004_Yale02.jpg\n22,Mount Bross,Mosquito Range,14178,Y,312,0.99,39.3354,-106.1077,West Slopes ,3.25,2250,Class 2,15000,20000,https://www.14ers.com/photos/lincolngroup/peakphotos/large/200505_Bross01.jpg\n23,Kit Carson Mountain,Sangre de Cristo Range,14171,Y,1025,1.27,37.9797,-105.6026,Via Challenger Point ,14.5,6250,Easy Class 3,1000,3000,https://www.14ers.com/photos/kitcarsongroup/peakphotos/large/201107_kitcar02.jpg\n24,Maroon Peak,Elk Mountains,14163,Y,2336,8.06,39.0708,-106.989,South ridge ,11.5,4800,Class 3,1000,3000,https://www.14ers.com/photos/maroongroup/peakphotos/large/201807_Maro02.jpg\n25,Tabeguache Peak,Sawatch Range,14162,Y,455,0.75,38.6255,-106.2509,Via Mount Shavano ,11,5600,Class 2,5000,7000,https://www.14ers.com/photos/shavanogroup/peakphotos/large/201005_Tabe01.jpg\n26,Mount Oxford (Colorado),Sawatch Range,14160,Y,653,1.22,38.9648,-106.3388,Via Mount Belford ,11,5800,Class 2,5000,7000,https://www.14ers.com/photos/belfordgroup/peakphotos/large/200508_Oxfo01.jpg\n27,Mount Sneffels,San Juan Mountains,14158,Y,3050,15.73,38.0038,-107.7923,South Slopes ,6,2900,Easy Class 3,3000,5000,https://www.14ers.com/photos/mtsneffels/peakphotos/large/200808_Snef23.jpg\n28,Mount Democrat,Mosquito Range,14155,Y,768,1.27,39.3396,-106.14,East Slope ,4,2150,Class 2,15000,20000,https://www.14ers.com/photos/lincolngroup/peakphotos/large/201706_Demo01.jpg\n29,Capitol Peak,Elk Mountains,14137,Y,1750,7.44,39.1503,-107.0829,Northeast Ridge ,17,5300,Class 4,1000,3000,https://www.14ers.com/photos/capitolpeak/peakphotos/large/200807_Capi02.jpg\n30,Pikes Peak,Front Range,14115,Y,5530,60.8,38.8405,-105.0442,East Slopes ,26,7500,Class 1,15000,20000,https://www.14ers.com/photos/pikespeak/peakphotos/large/201506_Pikes01.jpg\n31,Snowmass Mountain,Elk Mountains,14099,Y,1152,2.34,39.1188,-107.0665,East Slopes ,22,5800,Hard Class 3,1000,3000,https://www.14ers.com/photos/snowmassmtn/peakphotos/large/200907_Snow01.jpg\n32,Windom Peak,San Juan Mountains,14093,Y,2187,26.4,37.6212,-107.5919,West Ridge ,17,6000,Hard Class 2,3000,5000,https://www.14ers.com/photos/windomgroup/peakphotos/large/200607_Wind01.jpg\n33,Mount Eolus,San Juan Mountains,14090,Y,1024,1.69,37.6218,-107.6227,Northeast Ridge ,17,6100,Class 3,3000,5000,https://www.14ers.com/photos/windomgroup/peakphotos/large/200607_Eolus01.jpg\n34,Challenger Point,Sangre de Cristo Range,14087,Y,301,0.22,37.9804,-105.6066,North Slope ,12.5,5400,Hard Class 2,1000,3000,https://www.14ers.com/photos/kitcarsongroup/peakphotos/large/200707_chal01.jpg\n35,Mount Columbia,Sawatch Range,14077,Y,893,1.9,38.9039,-106.2975,West Slopes ,11.5,4250,Class 2,3000,5000,https://www.14ers.com/photos/harvardgroup/peakphotos/large/201005_Colu01.jpg\n36,Missouri Mountain,Sawatch Range,14074,Y,847,1.31,38.9476,-106.3785,Northwest Ridge ,10.5,4500,Class 2,3000,5000,https://www.14ers.com/photos/belfordgroup/peakphotos/large/200706_Miss01.jpg\n37,Humboldt Peak,Sangre de Cristo Range,14070,Y,1204,1.41,37.9762,-105.5552,West Ridge ,11,4200,Class 2,1000,3000,https://www.14ers.com/photos/crestonegroup/peakphotos/large/201607_Humb01.jpg\n38,Mount Bierstadt,Front Range,14065,Y,720,1.12,39.5826,-105.6688,West Slopes ,7,2850,Class 2,35000,40000,https://www.14ers.com/photos/evansgroup/peakphotos/large/200607_Bier01.jpg\n39,Sunlight Peak,San Juan Mountains,14065,Y,399,0.48,37.6274,-107.5959,South Face ,17,6000,Class 4,3000,5000,https://www.14ers.com/photos/windomgroup/peakphotos/large/200708_Sunl01.jpg\n40,Handies Peak,San Juan Mountains,14058,Y,1908,11.18,37.913,-107.5044,Southwest Slopes ,5.75,2500,Class 1,5000,7000,https://www.14ers.com/photos/handiespeak/peakphotos/large/200707_Hand03.jpg\n41,Culebra Peak,Sangre de Cristo Range,14053,Y,4827,35.5,37.1224,-105.1858,Northwest Ridge ,5,2700,Class 2,1000,3000,https://www.14ers.com/photos/culebrapeak/peakphotos/large/201508_Cule01.jpg\n42,Ellingwood Point,Sangre de Cristo Range,14048,Y,342,0.52,37.5826,-105.4927,South Face ,17,6200,Hard Class 2,1000,3000,https://www.14ers.com/photos/blancagroup/peakphotos/large/200607_Elli01.jpg\n43,Mount Lindsey,Sangre de Cristo Range,14048,Y,1542,2.26,37.5837,-105.4449,Northwest Gully ,8.25,3500,Easy Class 3,1000,3000,https://www.14ers.com/photos/mtlindsey/peakphotos/large/200606_Lind01.jpg\n44,Little Bear Peak,Sangre de Cristo Range,14043,Y,377,0.98,37.5666,-105.4972,West Ridge and Southwest Face ,14,6200,Class 4,1000,3000,https://www.14ers.com/photos/blancagroup/peakphotos/large/200607_Litt01.jpg\n45,Mount Sherman,Mosquito Range,14043,Y,850,8.06,39.225,-106.1699,Southwest Ridge ,5.25,2100,Class 2,20000,25000,https://www.14ers.com/photos/mtsherman/peakphotos/large/201207_Sher02.jpg\n46,Redcloud Peak,San Juan Mountains,14041,Y,1436,4.91,37.941,-107.4219,Northeast Ridge ,9,3700,Class 2,3000,5000,https://www.14ers.com/photos/redcloudgroup/peakphotos/large/201610_Redc02.jpg\n47,Pyramid Peak,Elk Mountains,14025,Y,1638,2.09,39.0717,-106.9502,Northeast Ridge ,8.25,4500,Class 4,1000,3000,https://www.14ers.com/photos/maroongroup/peakphotos/large/200807_Pyra01.jpg\n48,Wilson Peak,San Juan Mountains,14023,Y,857,1.51,37.8603,-107.9847,Southwest Ridge ,10,5000,Class 3,1000,3000,https://www.14ers.com/photos/wilsongroup/peakphotos/large/200604_Wils01.jpg\n49,San Luis Peak,San Juan Mountains,14022,Y,3113,27,37.9868,-106.9313,Northeast Ridge ,13.5,3600,Class 1,3000,5000,https://www.14ers.com/photos/sanluispeak/peakphotos/large/201807_San01.jpg\n50,Wetterhorn Peak,San Juan Mountains,14021,Y,1635,2.77,38.0607,-107.5109,Southeast Ridge ,7,3300,Class 3,3000,5000,https://www.14ers.com/photos/wetterhornpeak/peakphotos/large/201106_Wett01.jpg\n51,Mount of the Holy Cross,Sawatch Range,14011,Y,2113,18.52,39.4668,-106.4817,North Ridge ,12,5600,Class 2,3000,5000,https://www.14ers.com/photos/mtholycross/peakphotos/large/200706_Holy01.jpg\n52,Huron Peak,Sawatch Range,14010,Y,1423,3.21,38.9455,-106.4381,Northwest Slopes ,6.5,3500,Class 2,5000,7000,https://www.14ers.com/photos/huronpeak/peakphotos/large/201607_Huro01.jpg\n53,Sunshine Peak,San Juan Mountains,14007,Y,501,1.27,37.9228,-107.4256,Via Redcloud Peak ,12.25,4800,Class 2,3000,5000,https://www.14ers.com/photos/redcloudgroup/peakphotos/large/200606_Sun01.jpg\n54,Mt. Cameron,Mosquito Range,14238,N,158,0.48,39.347165,-106.118501,West Ridge ,4.75,2250,Class 2,15000,20000,https://www.14ers.com/photos/lincolngroup/peakphotos/large/200505_Linc01.jpg\n55,El Diente Peak,San Juan Mountains,14159,N,239,0.75,37.839383,-108.005335,North Slopes ,15,5000,Class 3,1000,3000,https://www.14ers.com/photos/wilsongroup/peakphotos/large/201007_ElD01.jpg\n56,Conundrum Peak,Elk Mountains,14060,N,280,0.4,39.015682,-106.862749,Via Castle Peak ,14.5,4850,Hard Class 2,1000,3000,https://www.14ers.com/photos/castlegroup/peakphotos/large/200807_Cast01.jpg\n57,North Eolus,San Juan Mountains,14039,N,199,0.25,37.625192,-107.621187,South Ridge ,16.75,6000,Class 3,3000,5000,https://www.14ers.com/photos/windomgroup/peakphotos/large/200607_Eolus01.jpg\n58,North Maroon Peak,Elk Mountains,14014,N,254,0.37,39.076007,-106.987058,Northeast Ridge ,9.25,4500,Class 4,1000,3000,https://www.14ers.com/photos/maroongroup/peakphotos/large/200807_NMar01.jpg\n"
    lines = text.split("\n");
    m_rows = []
    lines.forEach(l => {
        m_rows.push(l.split(","));
    });
    console.log(m_rows);
    mountains = []
    m_rows.forEach(row => {
        m = new Mountain(row[1], row[2], row[3], row[12], row[10], row[11], row[15], localStorage.getItem(row[1]));
        mountains.push(m);
    });
    total_elev = 0;
    total_miles = 0;
    total_climbed = 0.0;
    ranges = [new Range("Sawatch Range", []), new Range("Sangre de Cristo Range", []), new Range("San Juan Mountains", []), new Range("Mosquito Range", []), new Range("Elk Mountains", []),new Range("Front Range", [])];
    mountains.pop();
    mountains.shift();
    console.log(mountains);
    table = document.getElementById("table");
    dpdn = document.getElementById("mountains");
    mountains.forEach(m => {
        r = m.range_
        if(r == "Sawatch Range"){
            ranges[0].addMountain(m);
        }
        else if(r == "Sangre de Cristo Range"){
            ranges[1].addMountain(m);
        }
        else if(r == "San Juan Mountains"){
            ranges[2].addMountain(m);
        }
        else if(r == "Mosquito Range"){
            ranges[3].addMountain(m);
        }
        else if(r == "Elk Mountains"){
            ranges[4].addMountain(m);
        }
        else{
            ranges[5].addMountain(m);
        }
        new_row = document.createElement("tr");
        new_row.setAttribute("id", m.name_);
        td = document.createElement('td');
        td.innerHTML = m.name_;
        new_row.appendChild(td);

        td1 = document.createElement('td');
        td1.innerHTML = m.range_;    
        new_row.appendChild(td1);
        
        td2 = document.createElement('td');
        td2.innerHTML = m.altitude_;    
        new_row.appendChild(td2);
        
        td3 = document.createElement('td');
        td3.innerHTML = m.difficulty_;    
        new_row.appendChild(td3);
        
        td4 = document.createElement('td');
        td4.innerHTML = m.miles_;    
        new_row.appendChild(td4);
        
        td5 = document.createElement('td');
        td5.innerHTML = m.elev_gain_;    
        new_row.appendChild(td5);
        
        td6 = document.createElement('td');
        td6.innerHTML = m.date_completed_;    
        new_row.appendChild(td6);
        
        td7 = document.createElement('img');
        td7.setAttribute("src", m.url_);
        td7.setAttribute("width", "150px");    
        new_row.appendChild(td7);

        if(m.date_completed_ == "00/00/0000"){
            td7.setAttribute("class", "gray");
            dpdn_opt = document.createElement("option");
            dpdn_opt.setAttribute("value", m.name_);
            dpdn_opt.innerHTML = m.name_;
            dpdn.appendChild(dpdn_opt);
        }
        else{
            total_elev += parseFloat(m.elev_gain_);
            total_miles += parseFloat(m.miles_);
            total_climbed += 1.0;
        }
        

        table.appendChild(new_row);
        
    });
    percent_climbed = total_climbed / 58.0;
    document.getElementById("t_climbed").innerHTML = "Total Climbed: " + total_climbed + "/58 - " + percent_climbed.toFixed(2) + "%";
    document.getElementById("t_miles").innerHTML = "Total Distance: " + total_miles + " mi";
    document.getElementById("t_elev").innerHTML = "Total Elevation Gain " + total_elev + " ft";
    rtable = document.getElementById("rtable");
    console.log(ranges);
    ranges.forEach(r=>{
        l = parseFloat(r.total_mountains());
        c = 0.0
        r.mountains_.forEach(m=>{
            if(m.date_completed_ != "00/00/0000"){
                c += 1.0
            }
        });
        new_row = document.createElement("tr");
        new_row.setAttribute("id", r.name_);
        td = document.createElement('td');
        td.innerHTML = r.name_;
        new_row.appendChild(td);

        td1 = document.createElement('td');
        td1.innerHTML = c + "/" + l;
        new_row.appendChild(td1);

        td2 = document.createElement('td');
        td2.innerHTML = Math.round(c/l*100) + "%";
        console.log(c/l);
        new_row.appendChild(td2);
        rtable.appendChild(new_row);
    });

// })

}


start();
console.log(localStorage.getItem("Mount Elbert"))


