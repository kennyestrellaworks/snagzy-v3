import { useData } from "../../context/DataContext";
import { useOutletContext } from "react-router-dom";
import { ThreeGridProfilePicture } from "../../components/ThreeGridProfilePicture";
import { FourGridProfilePicture } from "../../components/FourGridProfilePicture";
import { TwoGridProfilePicture } from "../../components/TwoGridProfilePicture";
import { useEffect, useMemo, useRef, useState } from "react";
import { isoToRegularTimestamp } from "../../utils/helpers";
import { Search } from "../../components/SVG";

export const Test = () => {
  const [selectedConversationId, setSelectedConversationId] = useState(null);
  const { person, personConverstions } = useOutletContext();

  const {
    getAllConversations,
    getUserById,
    getMessagesByConversationId,
    getConversationLastItem,
  } = useData();

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedConversationId]);

  const allConversations = getAllConversations();
  // console.log("allConversations", allConversations);

  const renderSelectedConversationMessage = useMemo(() => {
    return getMessagesByConversationId(selectedConversationId).sort(
      (a, b) => new Date(a.timestamp) - new Date(b.timestamp),
    );
  }, [selectedConversationId, getMessagesByConversationId]);

  const selectedConversation = allConversations.filter(
    (item) => item._id === selectedConversationId,
  );

  // console.log("selectedConversation", selectedConversation);
  // console.log("conversations", conversations);

  const getOtherPerson = (item) => {
    // console.log("getOtherPerson item", item.length);
    if (item.length === 2) {
      const otherPersonId = item.filter((person) => person !== person._id);
      // console.log("otherPersonId", otherPersonId[0]);
      const otherPersonData = getUserById(otherPersonId[0]);
      // console.log("otherPersonData", otherPersonData);
      return otherPersonData;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {personConverstions.length === 0 ? (
        <div className="flex h-150 bg-slate-50">
          <div className="p-4 border-b border-slate-200">
            No conversation found!
          </div>
        </div>
      ) : (
        <div className="flex h-150 bg-slate-50 rounded-b-lg">
          <div className="p-4">
            <div className="flex w-300 h-full bg-white border border-slate-300 rounded-md">
              <div className="flex flex-col w-[30%]">
                <div className="flex h-20 items-center w-full border-b border-slate-300 px-2">
                  <div className="w-full">
                    <label
                      htmlFor="search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <input
                        type="search"
                        id="search"
                        className="block w-full p-3 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Search conversations..."
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Search height={20} width={20} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-full overflow-y-scroll">
                  {personConverstions.map((item, index) => {
                    // console.log("participants ", item.participants);
                    // console.log("participants ", item.participants.length);
                    const isSelected = item._id === selectedConversationId;
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedConversationId(item._id)}
                        className={`conversation flex gap-2 p-2 border-b border-gray-300 w-full text-left hover:bg-gray-50 transition-colors ${
                          isSelected ? "bg-blue-100" : ""
                        }`}
                      >
                        <div
                          key={`profile-${item._id}`}
                          className="relative shrink-0 flex items-center justify-center"
                        >
                          {item.participants.length === 3 ? (
                            <ThreeGridProfilePicture
                              participants={item.participants}
                            />
                          ) : item.participants.length > 3 ? (
                            <FourGridProfilePicture
                              participants={item.participants}
                            />
                          ) : (
                            <TwoGridProfilePicture
                              participants={item.participants}
                            />
                          )}
                          <div className="absolute top-0 left-0">
                            <div className="flex border-2 border-white rounded-full bg-green-700 h-4 w-4"></div>
                          </div>
                          {item.participants.length > 4 ? (
                            <div className="absolute bg-white/90 text-[12px] font-bold px-1.5 rounded-md">{`+${
                              item.participants.length - 4
                            }`}</div>
                          ) : null}
                        </div>
                        <div
                          key={`title-${item._id}`}
                          className="flex flex-col flex-1 min-w-0"
                        >
                          {item.participants.length === 2 ? (
                            <h1 className="font-semibold text-[16px] truncate">
                              {`${getUserById(item.createdBy)?.firstName} & `}
                              {getOtherPerson(item.participants)?.firstName}
                            </h1>
                          ) : item.participants.length === 3 ? (
                            <h1 className="font-semibold text-[16px] truncate">{`${
                              getUserById(item.createdBy)?.firstName
                            } & 2 others`}</h1>
                          ) : item.participants.length === 4 ? (
                            <h1 className="font-semibold text-[16px] truncate">{`${
                              getUserById(item.createdBy)?.firstName
                            } & 3 others`}</h1>
                          ) : item.participants.length > 4 ? (
                            <h1 className="font-semibold text-[16px] truncate">
                              {`${getUserById(item.createdBy)?.firstName} & ${
                                item.participants.length - 1
                              } others`}
                            </h1>
                          ) : null}
                          <p className="text-[14px] text-gray-600 truncate">
                            {getConversationLastItem(item._id)}
                          </p>
                          <p className="mt-2 text-[12px] text-gray-500">
                            {isoToRegularTimestamp(item.lastMessageTime)}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              {selectedConversation.length === 0 ? (
                <div className="flex flex-col w-[70%] border-l border-slate-300">
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-12 h-12 text-gray-400" />
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        No conversation selected
                      </h2>
                      <p className="text-gray-600">
                        Choose a conversation from the list to start viewing
                        messages
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col w-[70%] border-l border-slate-300">
                  <div className="flex items-center w-full border-b border-slate-300 p-2">
                    <div className="flex w-full gap-2 justify-between">
                      <div
                        key={`selected-profile-${selectedConversation[0]._id}`}
                        className="relative shrink-0 flex items-center justify-center"
                      >
                        {selectedConversation[0].participants.length === 3 ? (
                          <ThreeGridProfilePicture
                            participants={selectedConversation[0].participants}
                          />
                        ) : selectedConversation[0].participants.length > 3 ? (
                          <FourGridProfilePicture
                            participants={selectedConversation[0].participants}
                          />
                        ) : (
                          <TwoGridProfilePicture
                            participants={selectedConversation[0].participants}
                          />
                        )}
                        <div className="absolute top-0 left-0">
                          <div className="flex border-2 border-white rounded-full bg-green-700 h-4 w-4"></div>
                        </div>
                        {selectedConversation[0].participants.length > 4 ? (
                          <div className="absolute bg-white/90 text-[12px] font-bold px-1.5 rounded-md">{`+${
                            selectedConversation[0].participants.length - 4
                          }`}</div>
                        ) : null}
                      </div>
                      <div
                        key={`selected-title-${selectedConversation[0]._id}`}
                        className="flex flex-col flex-1 min-w-0"
                      >
                        {selectedConversation[0].participants.length === 2 ? (
                          <h1 className="font-semibold text-[16px] truncate">
                            {`${
                              getUserById(selectedConversation[0].createdBy)
                                ?.firstName
                            } & ${
                              getOtherPerson(
                                selectedConversation[0].participants,
                              )?.firstName
                            }`}
                          </h1>
                        ) : selectedConversation[0].participants.length ===
                          3 ? (
                          <h1 className="font-semibold text-[16px] truncate">{`${
                            getUserById(selectedConversation[0].createdBy)
                              ?.firstName
                          } & 2 others`}</h1>
                        ) : selectedConversation[0].participants.length ===
                          4 ? (
                          <h1 className="font-semibold text-[16px] truncate">{`${
                            getUserById(selectedConversation[0].createdBy)
                              ?.firstName
                          } & 3 others`}</h1>
                        ) : selectedConversation[0].participants.length > 4 ? (
                          <h1 className="font-semibold text-[16px] truncate">
                            {`${
                              getUserById(selectedConversation[0].createdBy)
                                ?.firstName
                            } & ${
                              selectedConversation[0].participants.length - 1
                            } others`}
                          </h1>
                        ) : null}
                        <p className="text-[14px] text-gray-600 truncate">
                          {/* {selectedConversation[0].lastMessage} */}
                          {getConversationLastItem(selectedConversation[0]._id)}
                        </p>
                        <p className="mt-2 text-[12px] text-gray-500">
                          {isoToRegularTimestamp(
                            selectedConversation[0].lastMessageTime,
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full">
                      <label
                        htmlFor="search-msg"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only"
                      >
                        Search
                      </label>
                      <div className="relative w-full">
                        <input
                          type="search"
                          id="search-msg"
                          className="block w-full p-3 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                          placeholder="Search messages..."
                          required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <Search height={20} width={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-full w-full p-4 overflow-y-auto">
                    {renderSelectedConversationMessage.map((item, index) => {
                      const sender = getUserById(item.senderId);

                      return (
                        <div
                          key={index}
                          className={`flex gap-2 mb-4 ${
                            sender._id !== person._id ? "" : "flex-row-reverse"
                          }`}
                        >
                          <div className="flex shrink-0">
                            <img
                              src={sender.image}
                              alt={sender.firstName + " " + sender.lastName}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col items-start">
                            <div className="relative">
                              <div
                                className={`px-4 py-2 rounded-tl-2xl rounded-tr-2xl ${
                                  sender._id !== person._id
                                    ? "rounded-br-2xl bg-gray-200 text-gray-800"
                                    : "rounded-bl-2xl bg-blue-700 text-white"
                                } text-[15px] max-w-xs  `}
                              >
                                {item.text}
                              </div>
                              {sender._id !== person._id ? (
                                <div
                                  className={`absolute bottom-0 -left-2 bg-gray-200 w-3 h-3`}
                                  style={{
                                    clipPath:
                                      "polygon(100% 0%, 0% 100%, 100% 100%)",
                                  }}
                                ></div>
                              ) : (
                                <div
                                  className={`absolute bottom-0 -right-2 bg-blue-700 w-3 h-3`}
                                  style={{
                                    clipPath:
                                      "polygon(100% 100%, 0% 100%, 0% 0%)",
                                  }}
                                ></div>
                              )}
                            </div>
                            <span className="text-[11px] text-gray-500 mt-1">
                              {isoToRegularTimestamp(item.timestamp)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                    <div ref={messagesEndRef} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
