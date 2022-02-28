import { EmptyState, Layout, Page } from '@shopify/polaris';

function Index() {
  return(
    <Page>
      <Layout>
        <EmptyState
          heading="Manage your inventory transfers"
          action={{content: 'Select Products'}}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Select Products</p>
        </EmptyState>
      </Layout>
    </Page>
  )
}

export default Index;

