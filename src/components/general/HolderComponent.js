import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

class Holder extends Component {
    render(){
        return(
            <View style={styles.holder}>
                {
                    this.props.isLoading
                    ? <View style={styles.innerHolder}>
                        <ActivityIndicator size='large' />
                    </View>
                    : this.props.children
                }
            </View>
        )
    }
}

Holder.defaultProps = {
    isLoading: false
}

export default Holder;

const styles = StyleSheet.create({
    holder: {
        flex: 1
    },
    innerHolder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})