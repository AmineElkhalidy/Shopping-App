import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import commerce from '../../lib/commerce'
import styled from 'styled-components'

const Container = styled.div`
.checkout__form{
  padding: 1rem 0.5rem;
  display: grid;
  row-gap: 1rem;
  margin-bottom: 5rem;
}

.checkout__subheading{
  font-size: var(--h3-font-size);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
}

.checkout__control{
  display: flex;
  align-items: center;
  column-gap: .5rem;
}

.checkout__label{
  width: 115px;
}

.checkout__input{
  padding: 0.5rem 0.2rem;
}

@media screen and (max-width: 433px){
  .checkout__input{
    width: 100%;
  }
}

@media screen and (min-width: 440px){
  .checkout__form{
    justify-items: center;
  }
}

@media screen and (min-width: 767px){
  .checkout__form{
    margin-top: 5rem;
  }
}
`

class Checkout extends Component{
    constructor(props){
        super(props);
        this.state = {
            checkoutToken: {},
            order: {},
            // Customer details
            firstName: 'Amine',
            lastName: 'Elkhalidy',
            email: 'elkhalidyamine.a@gmail.com',
            // Shipping details
            shippingName: 'Amine Elkhalidy',
            shippingStreet: '123 Casablanca St California',
            shippingCity: 'Casablanca',
            shippingStateProvince: 'CA',
            shippingPostalZipCode: '45000',
            shippingCountry: 'Morocco',
            // Payment details
            cardNum: '4242 4242 4242 4242',
            expMonth: '11',
            expYear: '2023',
            ccv: '123',
            billingPostalZipcode: '94107',
            // Shipping and fulfillment data
            shippingCountries: {},
            shippingSubdivisions: {},
            shippingOptions: [],
            shippingOption: '',
        }
    }

    generateCheckoutToken(){
        const { cart } = this.props;
        if(!cart.line_items) return <p>Loading...</p>
        if (cart.line_items.length) {
            commerce.checkout.generateToken(cart.id, { type: 'cart' })
            .then((token) => {
                this.setState({ checkoutToken: token });
            }).then(() => this.fetchShippingCountries(this.state.checkoutToken.id))
            .catch((error) => {
            console.log('There was an error in generating a token', error);
            });
        }
    }

    fetchShippingCountries(checkoutTokenId) {
        commerce.services.localeListShippingCountries(checkoutTokenId).then((countries) => {
          this.setState({ 
            shippingCountries: countries.countries,
          })
        }).catch((error) => {
          console.log('There was an error fetching a list of shipping countries', error);
        });
    }


    fetchSubdivisions(countryCode) {
        commerce.services.localeListSubdivisions(countryCode).then((subdivisions) => {
        this.setState({
            shippingSubdivisions: subdivisions.subdivisions,
            })
        }).catch((error) => {
            console.log('There was an error fetching the subdivisions', error);
        });
          }

    fetchShippingOptions(checkoutTokenId, country, stateProvince = null) {
            commerce.checkout.getShippingOptions(checkoutTokenId,
              { 
                country: country,
                region: stateProvince
              }).then((options) => {
                const shippingOption = options[0] || null;
                this.setState({
                  shippingOptions: options,
                  shippingOption: shippingOption,
                })
              }).catch((error) => {
                console.log('There was an error fetching the shipping methods', error);
            });
          }

    sanitizedLineItems(lineItems) {
            return lineItems.reduce((data, lineItem) => {
              const item = data;
              let variantData = null;
              if (lineItem.selected_options.length) {
                variantData = {
                  [lineItem.selected_options[0].group_id]: lineItem.selected_options[0].option_id,
                };
              }
              item[lineItem.id] = {
                quantity: lineItem.quantity,
                variants: variantData,
              };
            return item;
            }, {});
          };
          
          handleCaptureCheckout(e) {
            const { cart } = this.props;
            e.preventDefault();
            const orderData = {
              line_items: this.sanitizedLineItems(cart.line_items),
              customer: {
                firstname: this.state.firstName,
                lastname: this.state.lastName,
                email: this.state.email,
              },
              shipping: {
                name: this.state.shippingName,
                street: this.state.shippingStreet,
                town_city: this.state.shippingCity,
                county_state: this.state.shippingStateProvince,
                postal_zip_code: this.state.shippingPostalZipCode,
                country: this.state.shippingCountry,
              },
              fulfillment: {
                shipping_method: this.state.shippingOption.id
              },
              payment: {
                gateway: "test_gateway",
                card: {
                  number: this.state.cardNum,
                  expiry_month: this.state.expMonth,
                  expiry_year: this.state.expYear,
                  cvc: this.state.ccv,
                  postal_zip_code: this.state.billingPostalZipcode,
                },
              },
            };
            this.props.onCaptureCheckout(this.state.checkoutToken.id, orderData);
          };

    componentDidMount(){
      this.generateCheckoutToken();
    }

    // componentDidUpdate(prevProps, prevState) {
    //   if (this.state.form.shipping.country !== prevState.form.shipping.country) {
    //       this.fetchShippingOptions(this.state.checkoutToken.id, this.state.shippingCountry);
    //   }
    // }
          

    renderCheckoutForm() {
        return (
          <Container>
          <form className="checkout__form">
            <h4 className="checkout__subheading">Customer information</h4>
            <div className='checkout__control'>
            <label className="checkout__label" htmlFor="firstName">First name</label>
            <input className="checkout__input" type="text" defaultValue={this.state.firstName} name="firstName" placeholder="Enter your first name" required />
            </div>

            <div className='checkout__control'>
            <label className="checkout__label" htmlFor="lastName">Last name</label>
            <input className="checkout__input" type="text" defaultValue={this.state.lastName}name="lastName" placeholder="Enter your last name" required />
            </div>

            <div className='checkout__control'>
            <label className="checkout__label" htmlFor="email">Email</label>
            <input className="checkout__input" type="text" defaultValue={this.state.email} name="email" placeholder="Enter your email" required />
            </div>

            
            <h4 className="checkout__subheading">Shipping details</h4>
            <div className='checkout__control'>
            <label className="checkout__label" htmlFor="shippingName">Full name</label>
            <input className="checkout__input" type="text" defaultValue={this.state.shippingName} name="shippingName" placeholder="Enter your shipping full name" required />
            </div>

            <div className='checkout__control'>
            <label className="checkout__label" htmlFor="shippingStreet">Street address</label>
            <input className="checkout__input" type="text" defaultValue={this.state.shippingStreet} name="shippingStreet" placeholder="Enter your street address" required />
            </div>

            <div className='checkout__control'>
            <label className="checkout__label" htmlFor="shippingCity">City</label>
            <input className="checkout__input" type="text" defaultValue={this.state.shippingCity} name="shippingCity" placeholder="Enter your city" required />
            </div>

            <div className='checkout__control'>
            <label className="checkout__label" htmlFor="shippingPostalZipCode">Postal/Zip code</label>
            <input className="checkout__input" type="text" defaultValue={this.state.shippingPostalZipCode} name="shippingPostalZipCode" placeholder="Enter your postal/zip code" required />
            </div>

            <label className="checkout__label" htmlFor="shippingCountry">Country</label>


            <select
              value={this.state.shippingCountry}
              name="shippingCountry"
              className="checkout__select"
            >
              <option disabled>Country</option>
              {
                Object.keys(this.state.shippingCountries).map((index) => {
                  return (
                    <option value={index} key={index}>{this.state.shippingCountries[index]}</option>
                  )
                })
              };
            </select>

            <label className="checkout__label" htmlFor="shippingStateProvince">State/province</label>
            <select 
              value={this.state.shippingStateProvince}
              name="shippingStateProvince"
              className="checkout__select"
            >
              <option className="checkout__option" disabled>State/province</option>
              {
                Object.keys(this.state.shippingSubdivisions).map((index) => {
                  return (
                    <option value={index} key={index}>{this.state.shippingSubdivisions[index]}</option>
                  );
                })
              };
            </select>

            <label className="checkout__label" htmlFor="shippingOption">Shipping method</label>
            <select
              value={this.state.shippingOption.id}
              name="shippingOption"
              className="checkout__select"
            >
              <option className="checkout__select-option" disabled>Select a shipping method</option>
              {
                this.state.shippingOptions.map((method, index) => {
                  return (
                    <option className="checkout__select-option" value={method.id} key={index}>{`${method.description} - $${method.price.formatted_with_code}` }</option>
                  );
                })
              };
            </select>


            <h4 className="checkout__subheading">Payment information</h4>
      
            <div className='checkout__control'>
            <label className="checkout__label" htmlFor="cardNum">Credit card number</label>
            <input className="checkout__input" type="text" name="cardNum" defaultValue={this.state.cardNum} placeholder="Enter your card number" />
            </div>

            <div className='checkout__control'>
            <label className="checkout__label" htmlFor="expMonth">Expiry month</label>
            <input className="checkout__input" type="text" name="expMonth" defaultValue={this.state.expMonth} placeholder="Card expiry month" />
            </div>

            <div className='checkout__control'>
            <label className="checkout__label" htmlFor="expYear">Expiry year</label>
            <input className="checkout__input" type="text" name="expYear" defaultValue={this.state.expYear} placeholder="Card expiry year" />
            </div>

            <div className='checkout__control'>
            <label className="checkout__label" htmlFor="ccv">CCV</label>
            <input className="checkout__input" type="text" name="ccv" defaultValue={this.state.ccv} placeholder="CCV (3 digits)" />
            </div>

            <Link to='/confirmation' >
            <button className="button checkout__btn-confirm" onClick={this.handleCaptureCheckout}>Confirm order</button>
            </Link>
            
          </form>
          </Container>
        );
      };

    render(){
        return (
            this.renderCheckoutForm()
        );
        }; 
}

export default Checkout
