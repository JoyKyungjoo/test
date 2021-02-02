import React, { Component } from 'react';
import Modal from './Modal';
import './MusicApp.css'
import MusicForm from './MusicForm';
import MusicList from './MusicList';

class MusicApp extends Component {
    state = {
        musicData : [
            {rank:1,title:'Blueming',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'유지',id:0,key:'D1PvIWdJ8xo'},
            {rank:2,title:'늦은 밤 너의 집 앞 골목길에서',singer:'노을',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/302/841/81302841_1573114099166_1_140x140.JPG',state:'상승',id:0,key:'3gaLOtoSs40'},
            {rank:3,title:'unlucky',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'상승',id:0,key:'l5Rb1pNre40'},
            {rank:4,title:'시간의 바깥',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'상승',id:0,key:'R3Fwdnij49o'},
            {rank:5,title:'Love poem',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'유지',id:0,key:'qch5tdUQvYk'},
            {rank:6,title:'HIP',singer:'마마무(Mamamoo)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/309/776/81309776_1573713705694_1_140x140.JPG',state:'하강',id:0,key:'F4tMI_XcqQ0'},
            {rank:7,title:'그 사람',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'유지',id:0,key:'yuOMAvrGtxs'},
            {rank:8,title:'이 번호로 전화해줘',singer:'바이브',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/305/010/81305010_1574148594739_1_140x140.JPG',state:'하강',id:0,key:'v7oRIb31DQQ'},
            {rank:9,title:'자장가',singer:'아이유 (IU)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/297/613/81297613_1574066356132_1_140x140.JPG',state:'하강',id:0,key:'Hck18_59IRk'},
            {rank:10,title:'어떻게 이별까지 사랑하겠어, 널 사랑하는 거지',singer:'AKMU (악동뮤지션)',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/271/853/81271853_1569396403906_1_140x140.JPG',state:'유지',id:0,key:'mZz9uYdj_v4'},
            {rank:11,title:'흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야',singer:'장범준',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/260/027/81260027_1566538606488_1_140x140.JPG',state:'유지',id:0,key:'689GoEBjMhY'},
            {rank:12,title:'새 사랑',singer:'송하예',poster:'//image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/280/600/81280600_1570782050116_1_140x140.JPG',state:'유지',id:0,key:'t1H-Kw-7PGE'}
        ],
        filterData : [],
        done : false,
        findData : {}
    }

    handleTitle = (text) => {
        //indexOf
        const {musicData} = this.state

        this.setState({
            // 1.아래처럼 작성시, 같은 것에서 계속해서 검색하기때문에 검색창에 입력해도 결과나오지 않음...!
            // musicData : musicData.filter(musicData => musicData.title.indexOf(text) !== -1)
            
            // 올바른 검색 : 전체 데이터에서 찾아야 함!
            // 2. 여기서 이슈 : 대소문자 구분해서 검색해야만 정상노출됨
            // filterData : musicData.filter(musicData => musicData.title.indexOf(text) !== -1)

            // 3.정규식으로 변환하여 위의 이슈 해결 (대소문자 구분없이 검색가능하게 함)
            filterData : musicData.filter(musicData => {
                const re = new RegExp(text, 'ig')
                return musicData.title.match(re)
            })
        })
    }

    componentDidMount() {
        this.setState({
            filterData : this.state.musicData
        })
    }

    handleOpen = (id) => {
        const {musicData} = this.state
        this.setState({
            done : true,
            findData : musicData.find(musicData => musicData.rank === id)
        })
    }
    handleClose = () => {
        this.setState({
            done : false
        })
    }
    
    render() {
        const {filterData, done, findData} = this.state
        return (
            <div className="MusicApp">
                <MusicForm onTitle = {this.handleTitle}/>
                <MusicList onOpen={this.handleOpen} filterData = {filterData}/>
                <Modal done = {done} onClose = {this.handleClose} findData ={findData}/>
            </div>
        );
    }
}

export default MusicApp;