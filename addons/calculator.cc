#include <node.h>

namespace demo {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Number;
using v8::Object;
using v8::Value;

void Add(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = args.GetIsolate();

  // Проверяем количество и тип аргументов.
  if (args.Length() < 2) {
    isolate->ThrowException(v8::Exception::TypeError(
        v8::String::NewFromUtf8(isolate, "Wrong number of arguments", v8::NewStringType::kNormal).ToLocalChecked()));
    return;
  }

  if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
    isolate->ThrowException(v8::Exception::TypeError(
        v8::String::NewFromUtf8(isolate, "Wrong arguments", v8::NewStringType::kNormal).ToLocalChecked()));
    return;
  }

  // Выполняем операцию сложения.
  double value_to_add = args[0]->NumberValue(isolate->GetCurrentContext()).FromMaybe(0);
  double addend = args[1]->NumberValue(isolate->GetCurrentContext()).FromMaybe(0);
  Local<Number> num = Number::New(isolate, value_to_add + addend);

  // Устанавливаем возвращаемое значение.
  args.GetReturnValue().Set(num);
}

void Initialize(Local<Object> exports) {
  NODE_SET_METHOD(exports, "add", Add);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize)

}  // namespace demo
