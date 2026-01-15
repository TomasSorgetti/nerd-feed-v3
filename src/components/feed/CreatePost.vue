<script setup></script>

<template>
    <div className="p-4 border-b" >
            <div className="flex gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
              >
                YO
              </div>
              <div className="flex-1">
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What's on your mind? Share a bug, meme, or code tip..."
                  className="w-full resize-none bg-transparent focus:outline-none text-lg"
                  rows={3}
                ></textarea>

                {showCodeEditor && (
                  <div className="mt-3 rounded-lg overflow-hidden" >
                    <div
                      className="px-3 py-2 text-xs font-mono flex items-center justify-between"
                    >
                      <span>Code Snippet</span>
                      <button
                        onClick={() => setShowCodeEditor(false)}
                        className="hover:opacity-70 cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                    <textarea
                      value={postCode}
                      onChange={(e) => setPostCode(e.target.value)}
                      placeholder="// Paste your code here..."
                      className="w-full p-3 resize-none bg-transparent focus:outline-none font-mono text-sm"
                      rows={5}
                    />
                  </div>
                )}

                <div
                  className="flex items-center justify-between mt-4 pt-4 border-t"
                >
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowCodeEditor(!showCodeEditor)}
                      className="p-2 rounded-lg transition-all cursor-pointer hover:opacity-70"

                    >
                      <Code className="w-5 h-5" />
                    </button>
                    <button
                      className="p-2 rounded-lg transition-all cursor-pointer hover:opacity-70"
                    >
                      <ImageIcon className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    onClick={handleSubmitPost}
                    disabled={!postContent.trim()}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer disabled:opacity-50"

                  >
                    <Send className="w-4 h-4" />
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
</template>