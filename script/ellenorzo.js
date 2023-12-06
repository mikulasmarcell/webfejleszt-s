function bekuld()
{let pont = 0;

    const a = document.getElementById("ambrus").checked;
     const b = document.getElementById("palotai").checked;
    const c = document.getElementById("fabiny").checked;
    const d = document.getElementById("laca").checked;
     const e = document.getElementById("szamos").checked;
    const f = document.getElementById("aron").checked;
    const g = document.getElementById("bakonyi").checked;

    if (a== true) { document.getElementById("helyes1").style.color = "green"; };
    if (c== true) { document.getElementById("helyes2").style.color = "green"; };
    if (d== true) { document.getElementById("helyes3").style.color = "green"; };
    if (f== true) { document.getElementById("helyes4").style.color = "green"; };
    if (g== true) { document.getElementById("helyes5").style.color = "green"; };
    
    if (b== true) { document.getElementById("helytelen1").style.color = "red"; };
    if (e== true) { document.getElementById("helytelen2").style.color = "red"; };

    if (a==1 && b==0 && c==1 && d==1 && e==0 && f==1 && g==1){pont=pont+1;}

    const h = document.getElementById("2010").checked;
    const i = document.getElementById("2013").checked;
    const j = document.getElementById("2015").checked;
    const k = document.getElementById("2018").checked;

    if (j== true) { document.getElementById("helyes6").style.color = "green"; };

    if (h== true) { document.getElementById("helytelen3").style.color = "red"; };
    if (i== true) { document.getElementById("helytelen4").style.color = "red"; };
    if (k== true) { document.getElementById("helytelen5").style.color = "red"; };

    if (j==1){pont=pont+1;}

    const l = document.getElementById("Palotai Bálint").checked;
    const m = document.getElementById("Regős Mátyás").checked;
    const n = document.getElementById("Bakonyi Pál").checked;
    const o = document.getElementById("Fabiny Márton").checked;

    if (m== true) { document.getElementById("helyes7").style.color = "green"; };

    if (l== true) { document.getElementById("helytelen6").style.color = "red"; };
    if (n== true) { document.getElementById("helytelen7").style.color = "red"; };
    if (o== true) { document.getElementById("helytelen8").style.color = "red"; };

    if (m==1){pont=pont+1;}

    const p = document.getElementById("egy").checked;
    const q = document.getElementById("ketto").checked;
    const r = document.getElementById("harom").checked;
    const s = document.getElementById("negy").checked;

    if (q== true) { document.getElementById("helyes8").style.color = "green"; };

    if (p== true) { document.getElementById("helytelen9").style.color = "red"; };
    if (r== true) { document.getElementById("helytelen10").style.color = "red"; };
    if (s== true) { document.getElementById("helytelen11").style.color = "red"; };
    

    if (q==1){pont=pont+1;}

    const aa = document.getElementById("egyegy").checked;
    const ab = document.getElementById("kettoketto").checked;
    const ac = document.getElementById("haromharom").checked;
    const ad = document.getElementById("negynegy").checked;

    if (aa== true) { document.getElementById("helyes9").style.color = "green"; };

    if (ab== true) { document.getElementById("helytelen12").style.color = "red"; };
    if (ac== true) { document.getElementById("helytelen13").style.color = "red"; };
    if (ad== true) { document.getElementById("helytelen14").style.color = "red"; };

    if (aa==1){pont=pont+1;}

    const aaa = document.getElementById("egyegyegy").checked;
    const abb = document.getElementById("kettokettoketto").checked;
    const acc = document.getElementById("haromharomharom").checked;
    const add = document.getElementById("negynegynegy").checked;

    if (add== true) { document.getElementById("helyes10").style.color = "green"; };

    if (aaa== true) { document.getElementById("helytelen15").style.color = "red"; };
    if (abb== true) { document.getElementById("helytelen16").style.color = "red"; };
    if (acc== true) { document.getElementById("helytelen17").style.color = "red"; };

    if (add==1){pont=pont+1;}
    

    

    if (pont == 6) {
        document.getElementById("pontszam").innerText = "Összesen " + String(pont) + " pontot értél el! \nEVFC ultra vagy!";
   
    } else if (pont == 5|| pont == 4) {
        document.getElementById("pontszam").innerText = "Összesen " + String(pont) + " pontot értél el. \nEVFC szurkoló vagy!";
   
    } else {
        document.getElementById("pontszam").innerText = "Összesen " + String(pont) + " pontot értél el. \nTöbb EVFC meccsre kéne jönnöd!";
   
    }
   
}
