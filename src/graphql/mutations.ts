/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createLegalApp = /* GraphQL */ `mutation CreateLegalApp(
  $input: CreateLegalAppInput!
  $condition: ModelLegalAppConditionInput
) {
  createLegalApp(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLegalAppMutationVariables,
  APITypes.CreateLegalAppMutation
>;
export const updateLegalApp = /* GraphQL */ `mutation UpdateLegalApp(
  $input: UpdateLegalAppInput!
  $condition: ModelLegalAppConditionInput
) {
  updateLegalApp(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLegalAppMutationVariables,
  APITypes.UpdateLegalAppMutation
>;
export const deleteLegalApp = /* GraphQL */ `mutation DeleteLegalApp(
  $input: DeleteLegalAppInput!
  $condition: ModelLegalAppConditionInput
) {
  deleteLegalApp(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLegalAppMutationVariables,
  APITypes.DeleteLegalAppMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createLegalDocType = /* GraphQL */ `mutation CreateLegalDocType(
  $input: CreateLegalDocTypeInput!
  $condition: ModelLegalDocTypeConditionInput
) {
  createLegalDocType(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLegalDocTypeMutationVariables,
  APITypes.CreateLegalDocTypeMutation
>;
export const updateLegalDocType = /* GraphQL */ `mutation UpdateLegalDocType(
  $input: UpdateLegalDocTypeInput!
  $condition: ModelLegalDocTypeConditionInput
) {
  updateLegalDocType(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLegalDocTypeMutationVariables,
  APITypes.UpdateLegalDocTypeMutation
>;
export const deleteLegalDocType = /* GraphQL */ `mutation DeleteLegalDocType(
  $input: DeleteLegalDocTypeInput!
  $condition: ModelLegalDocTypeConditionInput
) {
  deleteLegalDocType(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLegalDocTypeMutationVariables,
  APITypes.DeleteLegalDocTypeMutation
>;
export const createLegalDoc = /* GraphQL */ `mutation CreateLegalDoc(
  $input: CreateLegalDocInput!
  $condition: ModelLegalDocConditionInput
) {
  createLegalDoc(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLegalDocMutationVariables,
  APITypes.CreateLegalDocMutation
>;
export const updateLegalDoc = /* GraphQL */ `mutation UpdateLegalDoc(
  $input: UpdateLegalDocInput!
  $condition: ModelLegalDocConditionInput
) {
  updateLegalDoc(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLegalDocMutationVariables,
  APITypes.UpdateLegalDocMutation
>;
export const deleteLegalDoc = /* GraphQL */ `mutation DeleteLegalDoc(
  $input: DeleteLegalDocInput!
  $condition: ModelLegalDocConditionInput
) {
  deleteLegalDoc(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLegalDocMutationVariables,
  APITypes.DeleteLegalDocMutation
>;
export const createLegalDocRecord = /* GraphQL */ `mutation CreateLegalDocRecord(
  $input: CreateLegalDocRecordInput!
  $condition: ModelLegalDocRecordConditionInput
) {
  createLegalDocRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLegalDocRecordMutationVariables,
  APITypes.CreateLegalDocRecordMutation
>;
export const updateLegalDocRecord = /* GraphQL */ `mutation UpdateLegalDocRecord(
  $input: UpdateLegalDocRecordInput!
  $condition: ModelLegalDocRecordConditionInput
) {
  updateLegalDocRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLegalDocRecordMutationVariables,
  APITypes.UpdateLegalDocRecordMutation
>;
export const deleteLegalDocRecord = /* GraphQL */ `mutation DeleteLegalDocRecord(
  $input: DeleteLegalDocRecordInput!
  $condition: ModelLegalDocRecordConditionInput
) {
  deleteLegalDocRecord(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLegalDocRecordMutationVariables,
  APITypes.DeleteLegalDocRecordMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
