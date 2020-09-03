const bandas = {
    lista: [
        { 
            nombre: "Green Day",
            integrantes: 3,
            genero: "Punk",
            topCanciones: ["American Idiot", "Wake Me Up When September Ends", "Welcome To Paradise"],
            cover: "/images/bandas/1.jpg",
            id: 1,
            video: "https://www.youtube.com/embed/Ee_uujKuJMI",  
        },
        { 
            nombre: "Coldplay",
            integrantes: 4,
            genero: "Rock",
            topCanciones: ["The Scientist", "Clocks", "Midnight"],
            cover: "/images/bandas/2.jpg",
            id: 2,
            video: "https://www.youtube.com/embed/RB-RcX5DS5A",  
        },
        { 
            nombre: "Imagine Dragons",
            integrantes: 4,
            genero: "Pop",
            topCanciones: ["Demons", "Radioactive", "Believer"],
            cover: "/images/bandas/3.jpg",
            id: 3,
            video: "https://www.youtube.com/embed/mWRsgZuwf_8",  
        },
        { 
            nombre: "Keane",
            integrantes: 4,
            genero: "R&B",
            topCanciones: ["Somewhere Only We Know", "Crystal Ball", "Everybody Is Changing"],
            cover: "/images/bandas/4.jpg",
            id: 4,
            video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
            nombre: "Daft Punk",
            integrantes: 2,
            genero: "Punk",
            topCanciones: ["Get Lucky", "One More Time", "Instant Crush"],
            cover: "/images/bandas/5.jpg",
            id: 5,
            video: "https://www.youtube.com/embed/FGBhQbmPwH8",
        },
        {
            nombre: "Duki",
            integrantes: 1,
            genero: "R&B",
            topCanciones: ["Goteo", "Lebron", "Mi Chain de Roque"],
            cover: "/images/bandas/6.jpg",
            id: 6,
            video: "https://www.youtube.com/embed/8S4eLgAVpn8",
        }, 
        {
            nombre: "Arctic Monkeys",
            integrantes: 4,
            genero: "Indie",
            topCanciones: ["Do I Wanna Know", "R U Mine", "Snap Out Of It"],
            cover: "/images/bandas/7.jpg",
            id: 7,
            video: "https://www.youtube.com/embed/bpOSxM0rNPM",
        },
        {
            nombre: "Portugal. The Man",
            integrantes: 5,
            genero: "Indie",
            topCanciones: ["Feel It Still", "Live In The Moment", "So Young"],
            cover: "/images/bandas/8.jpg",
            id: 8,
            video: "https://www.youtube.com/embed/pBkHHoOIIn8",
        },
        {
            nombre: "The Weeknd",
            integrantes: 1,
            genero: "Pop",
            topCanciones: ["Blinding Lights", "Starboy", "In Your Eyes"],
            cover: "/images/bandas/9.jpg",
            id: 9,
            video: "https://www.youtube.com/embed/4NRXx6U8ABQ",
        },
        { 
            nombre: "Metallica",
            integrantes: 5,
            genero: "Rock",
            topCanciones: ["Nothing Else Matters", "Enter Sandman", "Master Of Puppets"],
            cover: "/images/bandas/10.jpg",
            id: 10,
            video: "https://www.youtube.com/embed/tAGnKpE4NCI",
        },
    ],
    getBandaDetails: (idBanda) => {
        let bandaFound = [];
        bandas.lista.forEach(element => {
            if (idBanda == element.id) {
                bandaFound.push(element);
            }
        });
        if (bandaFound.length === 0) {
            return "No hay una banda con ese id"
        } else {
            return bandaFound;
        }
    },
    porGenero: (genero) => {
        let resultados = [];
        bandas.lista.forEach(element => {
            if (genero.toLowerCase() == element.genero.toLowerCase()) {
                resultados.push(element);
            }
        });
//        if (resultados.length === 0) {
//            return "No hay bandas de ese género";
//        } else {
//            return resultados;
//        }
        return resultados;
    },
};
//export

module.exports = bandas;