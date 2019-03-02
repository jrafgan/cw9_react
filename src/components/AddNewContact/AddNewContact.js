import React from 'react';
import './AddNewContact.css'
import {addNewDish, postDishes} from "../../store/actions";
import {connect} from "react-redux";

const AddNewContact = (props) => {
    return (
        <div className='add_new_div' onSubmit={props.submitNewDish}>
            <form className='add_form'>
                <input type="text" name='name' onChange={props.editValue} value={props.param.name}
                       placeholder='Название блюда'/>
                <input type="text" name='url' onChange={props.editValue} value={props.param.url}
                       placeholder='url кртинки'/>
                <input type="text" name='cost' onChange={props.editValue} value={props.param.cost}
                       placeholder='цена блюда'/>
                <button className="btn-addTask" type="submit" onClick={props.submitNewDish}>Add New Dish</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        param: state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editValue: (e) => dispatch(addNewDish(e.currentTarget)),
        submitNewDish: (e) => dispatch(postDishes(e)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewContact);