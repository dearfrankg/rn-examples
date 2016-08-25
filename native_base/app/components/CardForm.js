import React, { Component, PropTypes } from 'react'
import {
  Container, Content, List, ListItem, InputGroup, Input, Icon,
  Text, Button, Header, View
} from 'native-base'
import { reduxForm } from 'redux-form'

export const fields = ['ccNumber', 'expMonth', 'expYear', 'cvc']

class Checkout extends Component {

  handleSubmit = () => {
    this.props.actions.chargeCard({form: this.props.values, items: this.props.invoice.items})
  }
  render() {
    const {
      fields: { ccNumber, expMonth, expYear, cvc },
      handleSubmit,
      resetForm,
      submitting
      } = this.props
    return (
      <Container>
        <Header></Header>
        <Content>
            <List>
              <Text>CC Number</Text>
                <ListItem>
                  <InputGroup>
                      <Input {...ccNumber} placeholder="xxxx-xxxx-xxxx-xxxx" />
                  </InputGroup>
                </ListItem>

              <Text>Expiration Month</Text>
                <ListItem>
                  <InputGroup>
                      <Input {...expMonth} placeholder="mm" />
                  </InputGroup>
                </ListItem>

              <Text>Expiration Year</Text>
                <ListItem>
                  <InputGroup>
                      <Input {...expYear} placeholder="yyyy" />
                  </InputGroup>
                </ListItem>

              <Text>CVC</Text>
                <ListItem>
                  <InputGroup>
                      <Input {...cvc} placeholder="xxx" />
                  </InputGroup>
                </ListItem>
            </List>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', padding: 10}}>
              <Button onPress={this.handleSubmit}>Purchase</Button>
            </View>
        </Content>
      </Container>
    )
  }
}

Checkout.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'simple',
  fields
})(Checkout)
