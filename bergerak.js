const Daftar = (buttonValue) => {
    let namaInput = prompt("Masukkan Nama lengkap anda :")
    let callName = prompt("Masukkan Nama Panggilan anda :")
    let email = prompt("Masukkan E-mail anda :")
    let valueButton = `keluar${buttonValue.value}`;
    let getButton = document.getElementById(valueButton)
    console.log(valueButton)

    let kelas = buttonValue.value;
    if (namaInput.replace(/\s/g, '') !== "" && email.replace(/\s/g, '') !== "" && callName.replace(/\s/g, '') !== "") {
        if (JSON.parse(localStorage.getItem('daftar')) === null) {
            localStorage.setItem('daftar', JSON.stringify({
                nama: namaInput,
                callName: callName,
                email: email,
                kelas: kelas
            }))
            alert(`Form Pendaftaran 
            Nama : ${namaInput}
            Nama Panggilan : ${callName}
            E-mail : ${email} 
            Selamat Anda sudah terdafar di kelas online ${buttonValue.value}`)

            location.reload();

        } else {
            if (JSON.parse(localStorage.getItem("daftar")).nama !== namaInput && JSON.parse(localStorage.getItem("daftar")).email !== email && JSON.parse(localStorage.getItem("daftar")).callName !== callName) {
                localStorage.setItem('daftar', JSON.stringify({
                    nama: namaInput,
                    callName: callName,
                    email: email,
                    kelas: kelas
                }))
                alert(`Form Pendaftaran 
                Nama : ${namaInput}
                Nama Panggilan : ${callName}
                E-mail : ${email} 
                Selamat Anda sudah terdafar di kelas online ${buttonValue.value}`)

                location.reload();
            } else {
                alert("Maaf anda sudah terdaftar di kelas ini")
            }
        }
    } else {
        alert('Maaf kolom harus diisi, silahkan daftar kembali')
    }
}
const Keluar = () => {
    localStorage.removeItem('daftar');
    location.reload();
}

const CheckCondition = () => {
    if (JSON.parse(localStorage.getItem('daftar')) !== null) {
        let callName = JSON.parse(localStorage.getItem('daftar')).callName;

        document.getElementById("callname").style.display = "inline";
        document.getElementById("callname").innerText = `HALO ${callName}`;
    } else {
        document.getElementById("callname").style.display = "inline";
        document.getElementById("callname").innerText = "";
    }

    if (JSON.parse(localStorage.getItem('daftar')).kelas === "PaketSiKebut") {
        document.getElementById("keluarPaketSiKebut").style.display = "inline";
        document.getElementById("daftarPaketSiKebut").style.display = "none";
        document.getElementById("daftarPaketSiHebat").style.display = "none";
        document.getElementById("daftarPaketSiJago").style.display = "none";
    } else if (JSON.parse(localStorage.getItem('daftar')).kelas === "PaketSiHebat") {
        document.getElementById("keluarPaketSiHebat").style.display = "inline";
        document.getElementById("daftarPaketSiKebut").style.display = "none";
        document.getElementById("daftarPaketSiHebat").style.display = "none";
        document.getElementById("daftarPaketSiJago").style.display = "none";
    } else if (JSON.parse(localStorage.getItem('daftar')).kelas === "PaketSiJago") {
        document.getElementById("keluarPaketSiJago").style.display = "inline";
        document.getElementById("daftarPaketSiKebut").style.display = "none";
        document.getElementById("daftarPaketSiHebat").style.display = "none";
        document.getElementById("daftarPaketSiJago").style.display = "none";
    } else if (JSON.parse(localStorage.getItem('daftar')) === null) {
        document.getElementById("keluarPaketSiKebut").style.display = "none";
        document.getElementById("keluarPaketSiHebat").style.display = "none";
        document.getElementById("keluarPaketSiJago").style.display = "none";
    }
}
CheckCondition();