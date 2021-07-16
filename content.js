// an array of images to randomly select from
const imagesLinks = [
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626227823/friendsFX/DED0C63F-699D-4020-9893-6F37831454C5_qn1j8k.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626227822/friendsFX/479B5359-1ADE-40A6-9219-0CB921CFCFA8_d5ryww.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626227825/friendsFX/9FE3D3BE-B3DB-4879-99E1-1C2A8B210A07_hixnm5.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626227823/friendsFX/5A6744F1-D75D-4DDC-AC47-6B47E208C91D_ec7oek.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626060457/friendsFX/32F17381-A9A0-4366-B038-E9F568EAA194_kbrvc6.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626227825/friendsFX/1227D34E-889D-4721-9F17-C70512D386AA_jcyqsg.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626060566/friendsFX/3644E3C4-2397-4893-BABA-A28D89BCD4F1_mvwlj6.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626060519/friendsFX/A064F2CF-8619-43A9-9B7F-988EA4FF8AB6_wjqlcl.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1625511189/friendsFX/IMG20201223191703_wnindo.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1625511199/friendsFX/IMG20201223190841_1_gsz2dc.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1625511178/friendsFX/IMG20201223184730_k2xbvj.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1625511177/friendsFX/IMG20201223182658_bugiwp.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1625511175/friendsFX/IMG20201223182232_mm4eqh.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1625511172/friendsFX/IMG20201223184714_1_jejjba.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1625511158/friendsFX/IMG20201223182138_qnusrg.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626239231/friendsFX/quad.las_clkoej.webp",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626266189/friendsFX/01057FCE-61ED-42C4-A54A-DB7B4F42A6E2_wmpw8g.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626268294/friendsFX/BFF25717-7C2B-4BC4-AF1F-83161E36B3B5_ei69yv.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626266191/friendsFX/2737FCD9-4270-4F7E-B99C-7535AB57A4BD_resiqq.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626266191/friendsFX/56DECF67-8E92-4EED-83AD-22F365D3224D_sq6hyw.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626266190/friendsFX/70091FA4-6351-4D76-82AF-705343D2EF6B_qoccts.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626269780/friendsFX/072B06BB-1D0D-48B5-977E-EAAFDB994B52_yfmeil.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626269782/friendsFX/5917EAD5-0264-4FB0-94F0-ED2C20CBB7B6_uukr1l.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626259530/friendsFX/B733D39B-73C5-47B4-9A24-E88660B43E46_ap4pjc.png",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626301357/friendsFX/8E42BADE-B481-4202-9099-538A2A64DF1F_qjzxr9.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626301355/friendsFX/904B62B8-11BA-4506-B1E5-9CF8C4DAE708_igryyo.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626301356/friendsFX/DD077742-2013-442A-9D26-A403CF3FFA87_sag0od.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626301357/friendsFX/66923921-C0BE-4DFF-8B07-B73ACBC679DF_lmyolj.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626301359/friendsFX/0A2B1597-2C69-4A90-86AA-E7B096860CE8_yjp5r9.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626355809/friendsFX/ral_h8aeth.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626355808/friendsFX/Rall_zbjpzq.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626355970/friendsFX/F7532E52-6650-48A9-A2BC-F77C636E905C_jntqsq.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626355971/friendsFX/BDA6B3AF-7BCC-42E9-80E9-52A5DBC5BD1A_ykp1df.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626370533/friendsFX/ED485113-4F76-428A-ABBD-7547A0495FF8_w5spve.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626370227/friendsFX/E6CE246D-F6FE-4DA5-9A45-3C93DA295DB7_z8s4n1-ConvertImage_mqe0mt.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626370091/friendsFX/16BD10B2-42DF-4DBE-800D-398B25A94CB8_mutfh3.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626377494/friendsFX/5C4333EF-DF14-4A9B-8F3D-325CEFD1B05E_gsgnaf.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626370089/friendsFX/520AE243-327E-4792-A936-95D0D2002736_yijgk4.jpg",
    "https://res.cloudinary.com/dd3hmuucq/image/upload/v1626402394/friendsFX/039993CF-EBE7-459E-B507-BB77C3DBCC73_yptim2.jpg"
]



// fetches all image tags on a web page
const imageTags = document.getElementsByTagName("img")

// loop through each of the <img> tags on any webpage
// replace the 'src' attribute with a random link from the imageLinks array 
// Do this every 6 second

setInterval(() => {
    for (let i = 0; i < imageTags.length; i++) {
        let randomArrayIndex = Math.floor(Math.random() * imagesLinks.length)
        imageTags[i].src = imagesLinks[randomArrayIndex]
    }
}, 2500);