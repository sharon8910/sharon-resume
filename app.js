const app = Vue.createApp({
    data() {
        return {
            toggle: false,
            currentPage: 'Home',
            experienceIndex: 0,
            autobiographyIndex: 0,
            certificateIndex: 0,
            menu: [
                { url: '#header', name: 'Home' },
                { url: '#about', name: 'About' },
                { url: '#experience', name: 'Experience' },
                { url: '#autobiography', name: 'Autobiography' },
                { url: '#certificate', name: 'Certificate' },
            ],
            headerInfo: {
                contentA: "SHARON",
                contentB: "RESUME",
                contentC: "林郁軒",
            },
            aboutInfo: [
                { title: '學校',  content: '臺中科技大學' },
                { title: '科系',  content: '財務金融系' },
                { title: '生日',  content: '2001/10/10' },
                { title: '手機',  content: '0961139336' },
                { title: '信箱',  content: 'sharon891010@gmail.com' },
            ],
            skill: [
                { 
                    style: 'fas fa-file-powerpoint', 
                    tool: 'Powerpoint' 
                },
                { 
                    style: 'fas fa-file-excel',
                    tool: 'Excel' 
                },
                { 
                    style: 'fas fa-file-word',
                    tool: 'Word' 
                },
            ],
            experience: [
                { 
                    content: 'WORK', 
                    img: './image/exp01.jpg' 
                },
                { 
                    content: 'WORK', 
                    img: './image/exp02.jpg' 
                },
                { 
                    content: 'SCHOOL', 
                    img: ''
                },
            ],
            autobiography: [
                { 
                    title: '【自我介紹與人格特質】',
                    content: '我是林郁軒，目前就讀國立台中科技大學，主修財務金融系。我熱愛閱讀與學習，也對財經相關領域有濃厚的興趣與嚮往。我願意付出實際行動，也願意接受新挑戰，「任何事情都全力以赴」是我人生的態度。'
                },
                {
                    title: '【社團經歷】'
                },
                {
                    title: '【工作經歷】'
                }
            ],
            certificate: [
                '產物保險業務人員',
                '信託業業務人員',
                '金融常識與職業道德',
            ],
            certificateImage: [
                './image/certificate/01.jpg',
                './image/certificate/02.jpg',
                './image/certificate/03.jpg',
            ],
        }
    },
})
app.mount('#app');