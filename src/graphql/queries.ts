/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getLegalApp = /* GraphQL */ `query GetLegalApp($id: ID!) {
  getLegalApp(id: $id) {
    id
    name
    users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLegalAppQueryVariables,
  APITypes.GetLegalAppQuery
>;
export const listLegalApps = /* GraphQL */ `query ListLegalApps(
  $filter: ModelLegalAppFilterInput
  $limit: Int
  $nextToken: String
) {
  listLegalApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLegalAppsQueryVariables,
  APITypes.ListLegalAppsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    legalApp {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    legalDocRecords {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    legalAppUsersId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      legalAppUsersId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getLegalDocType = /* GraphQL */ `query GetLegalDocType($id: ID!) {
  getLegalDocType(id: $id) {
    id
    name
    shortName
    legalDocs {
      nextToken
      __typename
    }
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLegalDocTypeQueryVariables,
  APITypes.GetLegalDocTypeQuery
>;
export const listLegalDocTypes = /* GraphQL */ `query ListLegalDocTypes(
  $filter: ModelLegalDocTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLegalDocTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      shortName
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLegalDocTypesQueryVariables,
  APITypes.ListLegalDocTypesQuery
>;
export const getLegalDoc = /* GraphQL */ `query GetLegalDoc($id: ID!) {
  getLegalDoc(id: $id) {
    id
    version
    isActive
    url
    legalDocParentID {
      id
      version
      isActive
      url
      createdAt
      updatedAt
      legalDocTypeLegalDocsId
      legalDocLegalDocChildrenId
      __typename
    }
    legalDocChildren {
      nextToken
      __typename
    }
    legalDocType {
      id
      name
      shortName
      description
      createdAt
      updatedAt
      __typename
    }
    legalDocRecords {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    legalDocTypeLegalDocsId
    legalDocLegalDocChildrenId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLegalDocQueryVariables,
  APITypes.GetLegalDocQuery
>;
export const listLegalDocs = /* GraphQL */ `query ListLegalDocs(
  $filter: ModelLegalDocFilterInput
  $limit: Int
  $nextToken: String
) {
  listLegalDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      version
      isActive
      url
      createdAt
      updatedAt
      legalDocTypeLegalDocsId
      legalDocLegalDocChildrenId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLegalDocsQueryVariables,
  APITypes.ListLegalDocsQuery
>;
export const getLegalDocRecord = /* GraphQL */ `query GetLegalDocRecord($id: ID!) {
  getLegalDocRecord(id: $id) {
    id
    sign
    legalSignDate
    user {
      id
      name
      createdAt
      updatedAt
      legalAppUsersId
      __typename
    }
    legalDoc {
      id
      version
      isActive
      url
      createdAt
      updatedAt
      legalDocTypeLegalDocsId
      legalDocLegalDocChildrenId
      __typename
    }
    createdAt
    updatedAt
    userLegalDocRecordsId
    legalDocLegalDocRecordsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLegalDocRecordQueryVariables,
  APITypes.GetLegalDocRecordQuery
>;
export const listLegalDocRecords = /* GraphQL */ `query ListLegalDocRecords(
  $filter: ModelLegalDocRecordFilterInput
  $limit: Int
  $nextToken: String
) {
  listLegalDocRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sign
      legalSignDate
      createdAt
      updatedAt
      userLegalDocRecordsId
      legalDocLegalDocRecordsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLegalDocRecordsQueryVariables,
  APITypes.ListLegalDocRecordsQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    customerID
    accountRepresentativeID
    productID
    status
    amount
    date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      customerID
      accountRepresentativeID
      productID
      status
      amount
      date
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
