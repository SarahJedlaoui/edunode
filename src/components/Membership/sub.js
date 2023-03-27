<div id="paypal-button-container-P-8HR49030NU824513AMJPMQFI"></div>
<script src="https://www.paypal.com/sdk/js?client-id=ATGaaTJ17vmzPdI1zAPk3zbb89Qb6VYmB09u3jGj8AnhiYRt8NvhcwhADSQR_S4172a002qwy0jUHKRA&vault=true&intent=subscription" data-sdk-integration-source="button-factory"></script>
<script>
  paypal.Buttons({
      style: {
          shape: 'rect',
          color: 'silver',
          layout: 'vertical',
          label: 'subscribe'
      },
      createSubscription: function(data, actions) {
        return actions.subscription.create({
          /* Creates the subscription */
          plan_id: 'P-8HR49030NU824513AMJPMQFI'
        });
      },
      onApprove: function(data, actions) {
        alert(data.subscriptionID); // You can add optional success message for the subscriber here
      }
  }).render('#paypal-button-container-P-8HR49030NU824513AMJPMQFI'); // Renders the PayPal button
</script>