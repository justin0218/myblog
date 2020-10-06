// source: blogArticle.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.blog_article', null, global);
goog.exportSymbol('proto.blog_room', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blog_article = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog_article, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blog_article.displayName = 'proto.blog_article';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.blog_room = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.blog_room, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.blog_room.displayName = 'proto.blog_room';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blog_article.prototype.toObject = function(opt_includeInstance) {
  return proto.blog_article.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog_article} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog_article.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cover: jspb.Message.getFieldWithDefault(msg, 2, ""),
    goodNum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    view: jspb.Message.getFieldWithDefault(msg, 4, 0),
    recommended: jspb.Message.getFieldWithDefault(msg, 5, 0),
    type: jspb.Message.getFieldWithDefault(msg, 6, 0),
    preface: jspb.Message.getFieldWithDefault(msg, 7, ""),
    htmlTxtUrl: jspb.Message.getFieldWithDefault(msg, 8, ""),
    name: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 10, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_article}
 */
proto.blog_article.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_article;
  return proto.blog_article.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_article} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_article}
 */
proto.blog_article.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCover(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGoodNum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setView(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecommended(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreface(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setHtmlTxtUrl(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blog_article.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog_article.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_article} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog_article.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCover();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGoodNum();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getView();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getRecommended();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getPreface();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getHtmlTxtUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.blog_article.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.blog_article} returns this
 */
proto.blog_article.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string cover = 2;
 * @return {string}
 */
proto.blog_article.prototype.getCover = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog_article} returns this
 */
proto.blog_article.prototype.setCover = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 good_num = 3;
 * @return {number}
 */
proto.blog_article.prototype.getGoodNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.blog_article} returns this
 */
proto.blog_article.prototype.setGoodNum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 view = 4;
 * @return {number}
 */
proto.blog_article.prototype.getView = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.blog_article} returns this
 */
proto.blog_article.prototype.setView = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 recommended = 5;
 * @return {number}
 */
proto.blog_article.prototype.getRecommended = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.blog_article} returns this
 */
proto.blog_article.prototype.setRecommended = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 type = 6;
 * @return {number}
 */
proto.blog_article.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.blog_article} returns this
 */
proto.blog_article.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string preface = 7;
 * @return {string}
 */
proto.blog_article.prototype.getPreface = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog_article} returns this
 */
proto.blog_article.prototype.setPreface = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string html_txt_url = 8;
 * @return {string}
 */
proto.blog_article.prototype.getHtmlTxtUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog_article} returns this
 */
proto.blog_article.prototype.setHtmlTxtUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string name = 9;
 * @return {string}
 */
proto.blog_article.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog_article} returns this
 */
proto.blog_article.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string created_at = 10;
 * @return {string}
 */
proto.blog_article.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog_article} returns this
 */
proto.blog_article.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string updated_at = 11;
 * @return {string}
 */
proto.blog_article.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog_article} returns this
 */
proto.blog_article.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.blog_room.prototype.toObject = function(opt_includeInstance) {
  return proto.blog_room.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.blog_room} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog_room.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cover: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createTime: jspb.Message.getFieldWithDefault(msg, 4, ""),
    updateTime: jspb.Message.getFieldWithDefault(msg, 5, ""),
    olnum: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.blog_room}
 */
proto.blog_room.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.blog_room;
  return proto.blog_room.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.blog_room} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.blog_room}
 */
proto.blog_room.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCover(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdateTime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOlnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.blog_room.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.blog_room.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.blog_room} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.blog_room.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCover();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreateTime();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpdateTime();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOlnum();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.blog_room.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog_room} returns this
 */
proto.blog_room.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.blog_room.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog_room} returns this
 */
proto.blog_room.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cover = 3;
 * @return {string}
 */
proto.blog_room.prototype.getCover = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog_room} returns this
 */
proto.blog_room.prototype.setCover = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string create_time = 4;
 * @return {string}
 */
proto.blog_room.prototype.getCreateTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog_room} returns this
 */
proto.blog_room.prototype.setCreateTime = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string update_time = 5;
 * @return {string}
 */
proto.blog_room.prototype.getUpdateTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.blog_room} returns this
 */
proto.blog_room.prototype.setUpdateTime = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 olnum = 6;
 * @return {number}
 */
proto.blog_room.prototype.getOlnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.blog_room} returns this
 */
proto.blog_room.prototype.setOlnum = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto);
