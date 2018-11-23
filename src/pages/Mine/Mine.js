// import store from '../../store/index';
import { connect } from 'react-redux';

import MineUI from './MineUI'

const mapStateToProps=({Mine})=>{
  return {
    title:Mine.title,
  }
};
const mapDispatchToProps =null
export default connect(mapStateToProps, mapDispatchToProps)(MineUI);
