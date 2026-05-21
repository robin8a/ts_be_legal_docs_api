/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLegalApp = /* GraphQL */ `
  query GetLegalApp($id: ID!) {
    getLegalApp(id: $id) {
      id
      name
      userLegalApps {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLegalApps = /* GraphQL */ `
  query ListLegalApps(
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
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      userLegalApps {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserLegalApp = /* GraphQL */ `
  query GetUserLegalApp($id: ID!) {
    getUserLegalApp(id: $id) {
      id
      user {
        id
        name
        createdAt
        updatedAt
        __typename
      }
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
      legalAppUserLegalAppsId
      userUserLegalAppsId
      __typename
    }
  }
`;
export const listUserLegalApps = /* GraphQL */ `
  query ListUserLegalApps(
    $filter: ModelUserLegalAppFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLegalApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        legalAppUserLegalAppsId
        userUserLegalAppsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLegalDocType = /* GraphQL */ `
  query GetLegalDocType($id: ID!) {
    getLegalDocType(id: $id) {
      id
      name
      shortName
      description
      legalDocs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLegalDocTypes = /* GraphQL */ `
  query ListLegalDocTypes(
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
`;
export const getLegalDoc = /* GraphQL */ `
  query GetLegalDoc($id: ID!) {
    getLegalDoc(id: $id) {
      id
      version
      isActive
      is_latest
      url
      legalDocParentID {
        id
        version
        isActive
        is_latest
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
`;
export const listLegalDocs = /* GraphQL */ `
  query ListLegalDocs(
    $filter: ModelLegalDocFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLegalDocs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        version
        isActive
        is_latest
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
`;
export const getLegalDocRecord = /* GraphQL */ `
  query GetLegalDocRecord($id: ID!) {
    getLegalDocRecord(id: $id) {
      id
      sign
      legalSignDate
      userLegalApp {
        id
        createdAt
        updatedAt
        legalAppUserLegalAppsId
        userUserLegalAppsId
        __typename
      }
      legalDoc {
        id
        version
        isActive
        is_latest
        url
        createdAt
        updatedAt
        legalDocTypeLegalDocsId
        legalDocLegalDocChildrenId
        __typename
      }
      createdAt
      updatedAt
      userLegalAppLegalDocRecordsId
      legalDocLegalDocRecordsId
      __typename
    }
  }
`;
export const listLegalDocRecords = /* GraphQL */ `
  query ListLegalDocRecords(
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
        userLegalAppLegalDocRecordsId
        legalDocLegalDocRecordsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
