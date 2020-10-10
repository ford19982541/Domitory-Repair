import React from 'react'
import {Layout, Text} from '@ui-kitten/components'

export function Error({error}){
    return(
        <Layout>
            <Text status='danger'>{error}</Text>
        </Layout>
    )
}