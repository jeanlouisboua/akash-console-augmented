FROM node:18-alpine

# Create app directory
WORKDIR /app

COPY . .
ENV NODE_OPTIONS "--max-old-space-size=8192"
RUN yarn install
EXPOSE 3000
ENV REACT_APP_PROXY_URL="https://real-pink-squirrel-cuff.cyclic.cloud'"
ENV REACT_APP_PROXY_WSS="wss://real-pink-squirrel-cuff.cyclic.cloud"
ENV REACT_APP_SWAPSPACE_API_KEY = "687350774e278c40556dab20fc2e289490ff7fc63094d9060648e5741fa86dd006f8ac740a0f53ef21"
CMD ["yarn", "start"]