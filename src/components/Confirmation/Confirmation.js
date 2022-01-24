import { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
.confirmation{
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.confirmation__wrapper{
  padding: 2rem;
  border: 2px solid var(--first-color);
}
.confirmation__wrapper-message{
  margin-bottom: var(--mb-1);
}

.confirmation__wrapper-reference{
  margin-top: var(--mb-0-5);
}

.confirmation__wrapper-back{
  display: flex;
  justify-content: center;
  align-items: center;
}
`

class confirmation extends Component{
    renderOrderSummary() {
        const { order } = this.props;
    
        if (!order) {
          return null;
        }

        console.log(order);
    
        return (
          <Container >
            <div className="confirmation" >
                <div className="confirmation__wrapper">
                <div className="confirmation__wrapper-message">
                    <h4>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</h4>
                    <p className="confirmation__wrapper-reference">
                        <span>Order ref:</span> {order.customer_reference}
                    </p>
                </div>
                <Link
                    className="confirmation__wrapper-back"
                    type="button"
                    to="/"
                >
                    <span className="button">Back to home</span>
                </Link>
                </div>
            </div>
          </Container>
        );
      }
    
      render() {
        return (
          <>
            { this.renderOrderSummary() }
          </>
        );
      };
};

export default confirmation;