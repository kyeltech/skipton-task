# Skipton Task ReadMe

## Project Setup (Choices)

1. React Native Framework: This project uses Expo, which is the recommended framework for new React Native applications according to the official React Native documentation. it Provides default tools that allows development focus be drawn to logics and user experiences rather than low-level setup, while still using Typescript for type safety, Jest for testing and native APIs.

## Development

1. After Cloning Repo, Install dependencies by running

   ```bash
   yarn install
   ```

2. To Start App Metro server run

   ```bash
   yarn start

## Task Outline

A simple React Native application that fetches and display blog post from JSONPlacholder API.

The App(Task Goal) demostrates clean architecture, async data handling and basic testing using modern React tooling.

The project scope is fetching blog from a public REST API and display them in a performant  list while demostrating clean architecture, predictable state management, basic type saffety and testing knowledge

## Tech Stack(Framework & Architectural Choices)

 **React Native** (Expo)
 **Typescript**
 **TanStack React Query** - Server state management
 **Axios-HTTP client**
 **Jest** + **axios-mock-adaptor** - testing

 ---

## Features

**API LAYER**

- Fetches blog posts from REST API: Created a shared Axios instance to be used as a centralized HTTP configurations, in the same vain a generic API client to ensure type-safety response and resuability across any other API Logic that might come to live in the service functions. Used React Query to manage my states and avoid side effects

Goals: Strong typing of API responses, Reusability across different endpoints if need be and consistent error propagation

- Display data in a performant list (`FlatList`): for performance and memory efficiency, for virtualization and also it lightweight usage while making sure my Js thread is overworked or Janks. that's why an added onion of initialNumToRender was used.

- Handles loading and error states: Did not create a global error boundary at this point because React Query can manange error state and Axios throws the error just fine. but as the project grows it's going to be a safer option

- Skeleton loaders for better UX: Skeleton loaders are displayed during data fetches to improve perceived performance. The skeleton component is reusable and designed to scale as additional list-based screens are added.

- Unit tests for API requests: Did Unit testing to mock axios calls and response preventing real network calls while asserting the value of the thrown error

## What the test basically does

- Unit tests were implemented using Jest and axios-mock-adapter to validate
API-layer logic in isolation.

The tests cover(What was tested):

- Successful API responses
- Error handling when requests fail

Final Notes

This project is intentionally simple, but structured in a way that can scale as additional features or screens are introduced. The focus throughout was on clarity, correctness, and maintainability rather than overengineering.
