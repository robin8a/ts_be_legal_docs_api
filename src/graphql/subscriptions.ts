/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateLegalApp = /* GraphQL */ `subscription OnCreateLegalApp($filter: ModelSubscriptionLegalAppFilterInput) {
  onCreateLegalApp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLegalAppSubscriptionVariables,
  APITypes.OnCreateLegalAppSubscription
>;
export const onUpdateLegalApp = /* GraphQL */ `subscription OnUpdateLegalApp($filter: ModelSubscriptionLegalAppFilterInput) {
  onUpdateLegalApp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLegalAppSubscriptionVariables,
  APITypes.OnUpdateLegalAppSubscription
>;
export const onDeleteLegalApp = /* GraphQL */ `subscription OnDeleteLegalApp($filter: ModelSubscriptionLegalAppFilterInput) {
  onDeleteLegalApp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLegalAppSubscriptionVariables,
  APITypes.OnDeleteLegalAppSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserLegalApp = /* GraphQL */ `subscription OnCreateUserLegalApp(
  $filter: ModelSubscriptionUserLegalAppFilterInput
) {
  onCreateUserLegalApp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserLegalAppSubscriptionVariables,
  APITypes.OnCreateUserLegalAppSubscription
>;
export const onUpdateUserLegalApp = /* GraphQL */ `subscription OnUpdateUserLegalApp(
  $filter: ModelSubscriptionUserLegalAppFilterInput
) {
  onUpdateUserLegalApp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserLegalAppSubscriptionVariables,
  APITypes.OnUpdateUserLegalAppSubscription
>;
export const onDeleteUserLegalApp = /* GraphQL */ `subscription OnDeleteUserLegalApp(
  $filter: ModelSubscriptionUserLegalAppFilterInput
) {
  onDeleteUserLegalApp(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserLegalAppSubscriptionVariables,
  APITypes.OnDeleteUserLegalAppSubscription
>;
export const onCreateLegalDocType = /* GraphQL */ `subscription OnCreateLegalDocType(
  $filter: ModelSubscriptionLegalDocTypeFilterInput
) {
  onCreateLegalDocType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLegalDocTypeSubscriptionVariables,
  APITypes.OnCreateLegalDocTypeSubscription
>;
export const onUpdateLegalDocType = /* GraphQL */ `subscription OnUpdateLegalDocType(
  $filter: ModelSubscriptionLegalDocTypeFilterInput
) {
  onUpdateLegalDocType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLegalDocTypeSubscriptionVariables,
  APITypes.OnUpdateLegalDocTypeSubscription
>;
export const onDeleteLegalDocType = /* GraphQL */ `subscription OnDeleteLegalDocType(
  $filter: ModelSubscriptionLegalDocTypeFilterInput
) {
  onDeleteLegalDocType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLegalDocTypeSubscriptionVariables,
  APITypes.OnDeleteLegalDocTypeSubscription
>;
export const onCreateLegalDoc = /* GraphQL */ `subscription OnCreateLegalDoc($filter: ModelSubscriptionLegalDocFilterInput) {
  onCreateLegalDoc(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLegalDocSubscriptionVariables,
  APITypes.OnCreateLegalDocSubscription
>;
export const onUpdateLegalDoc = /* GraphQL */ `subscription OnUpdateLegalDoc($filter: ModelSubscriptionLegalDocFilterInput) {
  onUpdateLegalDoc(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLegalDocSubscriptionVariables,
  APITypes.OnUpdateLegalDocSubscription
>;
export const onDeleteLegalDoc = /* GraphQL */ `subscription OnDeleteLegalDoc($filter: ModelSubscriptionLegalDocFilterInput) {
  onDeleteLegalDoc(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLegalDocSubscriptionVariables,
  APITypes.OnDeleteLegalDocSubscription
>;
export const onCreateLegalDocRecord = /* GraphQL */ `subscription OnCreateLegalDocRecord(
  $filter: ModelSubscriptionLegalDocRecordFilterInput
) {
  onCreateLegalDocRecord(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLegalDocRecordSubscriptionVariables,
  APITypes.OnCreateLegalDocRecordSubscription
>;
export const onUpdateLegalDocRecord = /* GraphQL */ `subscription OnUpdateLegalDocRecord(
  $filter: ModelSubscriptionLegalDocRecordFilterInput
) {
  onUpdateLegalDocRecord(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLegalDocRecordSubscriptionVariables,
  APITypes.OnUpdateLegalDocRecordSubscription
>;
export const onDeleteLegalDocRecord = /* GraphQL */ `subscription OnDeleteLegalDocRecord(
  $filter: ModelSubscriptionLegalDocRecordFilterInput
) {
  onDeleteLegalDocRecord(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLegalDocRecordSubscriptionVariables,
  APITypes.OnDeleteLegalDocRecordSubscription
>;
