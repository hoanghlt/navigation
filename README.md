# Navigation

Bài này sẽ dung các thư viện:
@react-navigation/drawer
@react-navigation/native
@react-navigation/native-stack
react-native-gesture-handler
react-native-reanimated
react-native-safe-area-context
react-native-screens

- Để sắp xếp triển khai các navigation
- Cụ thể bài toán là hiển thị các Category món ăn, xem chi tiết nội dung mỗi category đó có những món gì, món đó sẽ gồm thành phần nào, cách làm(chế biến)

# Sử dụng hook useLayoutEffect:

    Được gọi ngay sau khi DOM đã được cập nhật, nhưng trước khi trình duyệt vẽ (paint). Điều này có nghĩa là useLayoutEffect sẽ chạy đồng bộ sau khi DOM thay đổi, nhưng trước khi người dùng thấy bất kỳ cập nhật nào trên màn hình. Điều này hữu ích khi bạn cần tính toán hoặc điều chỉnh layout của DOM trước khi trình duyệt vẽ.

- Khi nào nên sử dụng useLayoutEffect?
  Đo lường DOM: Nếu bạn cần đo kích thước của một phần tử DOM hoặc vị trí của nó ngay sau khi nó được render, và bạn muốn đảm bảo rằng kết quả đo lường này được sử dụng ngay lập tức trước khi vẽ.

  Đồng bộ hóa với các phép tính dựa trên layout: Khi bạn cần thực hiện các thay đổi đối với DOM hoặc layout mà phải được thực hiện trước khi trình duyệt render để tránh các phép tính hoặc layout sai lệch.

  Tránh nhấp nháy hoặc giật (flicker): Nếu bạn có một side effect có thể làm cho UI của bạn trông nhấp nháy hoặc không nhất quán, hãy dùng useLayoutEffect để đảm bảo mọi thay đổi xảy ra ngay lập tức.

# Sử dụng context API

là một công cụ mạnh mẽ để truyền dữ liệu giữa các thành phần mà không cần phải truyền qua từng cấp (props drilling). Điều này đặc biệt hữu ích khi bạn cần chia sẻ trạng thái hoặc dữ liệu giữa nhiều thành phần mà không muốn truyền dữ liệu qua từng cấp của cây thành phần.

- Khi nào nên sử dụng Context API?

* Truyền dữ liệu qua nhiều cấp: Khi bạn cần truyền dữ liệu từ một thành phần tổ tiên đến các thành phần con nhiều cấp dưới mà không muốn truyền qua từng cấp (props drilling).
* Chia sẻ trạng thái toàn cục: Khi có những trạng thái hoặc dữ liệu cần được sử dụng ở nhiều nơi trong ứng dụng, như trạng thái người dùng đã đăng nhập, chủ đề giao diện (theme), hoặc ngôn ngữ.

- Cách sử dụng:

* Dùng createContext() để tạo context
* Dùng Provider để quản lý trạng thái toàn cục của hệ sinh thái sử dụng context, có thể cung cấp dữ liệu hoặc chia sẻ trạng thái đến cái thành phần con mà không cần dùng props
* Dùng useContext() hoặc Consumer để sử dụng context

# Sử dụng Redux

- Cách Redux Hoạt Động

* Khởi tạo ứng dụng: Khi ứng dụng bắt đầu, bạn tạo "store" với một "reducer" để quản lý trạng thái.
* Gửi action: Khi người dùng tương tác với ứng dụng, bạn gửi action bằng cách sử dụng "dispatch".
* Reducer xử lý action: Reducer nhận action, tính toán trạng thái mới, và trả về trạng thái mới đó.
* Store cập nhật trạng thái: Store cập nhật trạng thái và các thành phần của ứng dụng sử dụng trạng thái đó sẽ tự động được cập nhật.

- Các Khái Niệm Chính Trong Redux

Store:
Store là nơi lưu trữ toàn bộ trạng thái của ứng dụng. Nó giống như một cây trạng thái (state tree) duy nhất, chứa tất cả dữ liệu của ứng dụng. Bạn không bao giờ thay đổi trực tiếp trạng thái trong store; thay vào đó, bạn gửi các action để yêu cầu thay đổi trạng thái.

Action:
Action là một đối tượng đơn giản mô tả một sự kiện xảy ra trong ứng dụng. Một action phải có thuộc tính type, là một chuỗi xác định loại hành động đang diễn ra, và có thể có các thuộc tính khác để truyền dữ liệu (payload).

Reducer:
Reducer là một hàm thuần (pure function) nhận trạng thái hiện tại và một action và trả về trạng thái mới. Reducer chỉ định cách trạng thái của ứng dụng thay đổi để đáp ứng một action.

Dispatch:
Dispatch là một phương thức được cung cấp bởi store để gửi action đến reducer. Khi bạn gọi dispatch, action sẽ được chuyển đến reducer, nơi trạng thái sẽ được tính toán lại dựa trên action đó.
sử dụng useDispatch from react-redux ; const dispatch = useDispatch();
dispatch(actionName({pram}));

Selectors:
Selectors là các hàm giúp bạn lấy dữ liệu từ store. Chúng có thể được sử dụng để trích xuất các phần cụ thể của trạng thái và tính toán hoặc lọc dữ liệu nếu cần.
Sử dụng useSelector from react-redux; useSelector((state) => state.favoriteMeals.ids);

# Tư duy

- Muốn xóa 1 đối tượng có trong [] state, ta set lại giá trị [] bằng giá trị [] đã fillter chỉ lấy các giá trị khác giá trị cần loại bỏ

# So sánh Redux và Context API

1. Mục Đích và Phạm Vi Sử Dụng
   Redux:
   Được thiết kế để quản lý trạng thái toàn cục của ứng dụng, đặc biệt là trong các ứng dụng lớn và phức tạp.
   Redux cung cấp một mô hình nhất quán cho việc cập nhật trạng thái, giúp việc quản lý trạng thái trở nên có thể dự đoán được, dễ gỡ lỗi, và dễ kiểm tra.
   Hỗ trợ các tính năng mạnh mẽ như middlewares (e.g., Redux Thunk, Redux Saga) để xử lý các side effects và logic bất đồng bộ.

   Context API:
   Được tích hợp sẵn trong React và chủ yếu dùng để truyền dữ liệu qua các cấp của cây thành phần mà không cần props drilling.
   Context API phù hợp hơn cho việc quản lý trạng thái toàn cục đơn giản, như giao diện người dùng (UI theme), thông tin người dùng, hoặc ngôn ngữ.
   Không hỗ trợ các tính năng như middlewares hoặc devtools mặc định, nên thích hợp hơn cho các ứng dụng đơn giản hoặc nhỏ.

2. Dễ Dàng Sử Dụng và Thiết Lập
   Redux:
   Cần cấu hình nhiều hơn với các reducer, action, store, và có thể cần thêm middleware nếu bạn có logic bất đồng bộ hoặc side effects phức tạp.
   Đòi hỏi hiểu biết tốt về khái niệm reducer, action, và cách hoạt động của Redux.

   Context API:
   Dễ sử dụng hơn và ít cấu hình hơn. Bạn chỉ cần tạo một context, một provider, và sử dụng useContext trong các thành phần cần truy cập trạng thái.
   Không cần phải cài đặt bất kỳ thư viện bổ sung nào ngoài React.

3. Hiệu Suất
   Redux:
   Hiệu suất có thể tốt hơn trong các ứng dụng lớn khi được tối ưu hóa đúng cách, ví dụ như khi sử dụng connect và mapStateToProps từ react-redux để tránh re-render không cần thiết.

   Context API:
   Context API có thể gặp vấn đề về hiệu suất khi sử dụng với một lượng lớn dữ liệu hoặc khi có nhiều re-render, do mỗi lần giá trị của context thay đổi sẽ dẫn đến việc re-render tất cả các thành phần con sử dụng context đó.

4. Khả Năng Mở Rộng và Hỗ Trợ Công Cụ
   Redux:
   Có một hệ sinh thái phong phú với nhiều thư viện hỗ trợ, như Redux Thunk, Redux Saga, và Redux DevTools để giúp quản lý trạng thái và logic bất đồng bộ.
   Redux DevTools là một công cụ mạnh mẽ giúp bạn kiểm tra, theo dõi, và gỡ lỗi trạng thái của ứng dụng.

   Context API:
   Không có sẵn các công cụ mở rộng mạnh mẽ như Redux. Context API đơn giản và thường không yêu cầu công cụ bổ sung.

5. Kiến Trúc và Tư Duy
   Redux:
   Redux tuân theo các nguyên tắc nghiêm ngặt về cách trạng thái được cập nhật thông qua các action và reducer, thúc đẩy mô hình nhất quán và dự đoán được.
   Redux yêu cầu bạn phải suy nghĩ theo cách thức lập trình hướng sự kiện (event-driven programming).

   Context API:
   Không có mô hình cụ thể như Redux. Bạn có thể cập nhật trực tiếp giá trị trong context, điều này đơn giản hơn nhưng ít có cấu trúc và ít dự đoán hơn so với Redux.
   Phù hợp với các tình huống đơn giản hơn, nơi mà không cần một kiến trúc phức tạp.

6. Khi Nào Nên Sử Dụng
   Redux:
   Khi ứng dụng của bạn lớn, phức tạp, và cần quản lý trạng thái toàn cục phức tạp với nhiều logic bất đồng bộ hoặc side effects.
   Khi bạn cần sử dụng công cụ gỡ lỗi mạnh mẽ như Redux DevTools, hoặc khi bạn cần mở rộng ứng dụng với các tính năng nâng cao như undo/redo, hoặc theo dõi lịch sử trạng thái.

   Context API:
   Khi bạn đang phát triển một ứng dụng nhỏ hoặc vừa, và chỉ cần chia sẻ một số dữ liệu hoặc trạng thái giữa các thành phần mà không cần quản lý quá phức tạp.
   Khi bạn không muốn thêm thư viện ngoài và muốn giữ mọi thứ đơn giản và nhẹ nhàng.
