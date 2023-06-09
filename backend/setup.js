const Store = require("./db/models/store.model");

const addStores = async () => {
    await Store.create({
        store_name: "หม้อหน้ามอ",
        lat: 14.882593791920883,
        long: 102.0260463249533,
        detail:"ร้านหม้อหน้าม. ชาบู & หมูกระทะบุฟเฟต์"
    })

    await Store.create({
        store_name: "HOP Beer House Suranaree (HOP Bar)",
        lat: 14.891645483155513,
        long: 102.04018698042529,
        detail:"เป็นร้านที่จำหน่ายคราฟเบียร์ที่หลากหลาย"
    })

    await Store.create({
        store_name: "โปรด มาม่าหม้อไฟชีส",
        lat: 14.88156170017486,
        long: 102.02675417345594,
        detail:"มาม่าหม้อไฟชีสเกาหลี / เครื่องดื่ม"
    })

    await Store.create({
        store_name: "โคกกรวดสเต็ก3 มทส.ประตู4",
        lat: 14.90360982224358,
        long: 102.01058648587265,
        detail:"จำหน่าย สเต็ก และอาหารตามสั่ง"
    })

    await Store.create({
        store_name: "ก๋วยเตี๋ยวบ้านแจ๋ว",
        lat: 14.905292429092647,
        long: 102.01090690135945,
        detail:"ร้านก๋วยเตี๋ยวปลาคุณภาพดี"
    })

    await Store.create({
        store_name: "บ้านเกี้ยว เตี๋ยวลาวา",
        lat: 14.906256191484687,
        long: 102.01165082661666,
        detail:"ก๋วยเตี๋ยวร่อย กุ้งเน้นๆ ไข่ลาวา"
    })

    await Store.create({
        store_name: "ยำไฟแลบ",
        lat: 14.902305593782522,
        long: 102.00952610123375,
        detail:"ร้านยำสุดจี๊ด อร่อยจัดจ้านในย่าน มทส."
    })

    await Store.create({
        store_name: "เอ็นหอยย่าง ป้าวันดี",
        lat:12.623275946608405,
        long:101.43061881599908,
        detail:"เอ็นหอยย่างป้าวันดีบ้านเพ"
    })

    await Store.create({
        store_name:"ข้าวโอ๊ตไอติมไข่เค็มหมูหยอง ข้าวโอ๊ตขนมปังสังขยา",
        lat: 12.621855471181718,
        long: 101.42920325084572,
        detail:"ข้าวโอ๊ตไอติมไข่เค็มหมูหยอง ข้าวโอ๊ตขนมปังสังขยา"
    })

    await Store.create({
        store_name: "ร้านอุดม SEAFOOD สาขาบ้านเพระยอง",
        lat: 12.624561057358392,
        long: 101.4338107178783,
        detail:"ร้านอุดม SEAFOOD สาขาบ้านเพระยอง"
    })
} 

addStores()

module.exports = {addStores}